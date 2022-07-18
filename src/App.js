import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './components/pages/Login'
import Profile from './components/pages/Profile'
import Register from './components/pages/Register'
import Navbar from './components/Navbar'
import jwt_decode from 'jwt-decode'
import { Navigate } from 'react-router-dom'
import CharacterSheet from './components/pages/CharacterSheet'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  // useEffect -- if the user navigates away fro the page, we will log them back in
  useEffect(() => {
    // check to see if token is in storage
    const token = localStorage.getItem('jwt')
    if (token) {
      // if so, we will decode it and set the user in app state
      setCurrentUser(jwt_decode(token))
    } else {
      setCurrentUser(null)
    }
  }, [])

  //event handler to log the user out when needed

  const handleLogout = () => {
    console.log('log the user out')
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt')
      setCurrentUser(null)
    }
  }
  return (
    <div className='App'>
      <header className='fixed top-0 w-full'>
        <Navbar currentUser={currentUser} handleLogout={handleLogout} />
      </header>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        <Route
          exact
          path='/register'
          element={
            <Register
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          exact
          path='/login'
          element={
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        <Route
          exact
          path='/profile'
          element={
            currentUser ? (
              <Profile
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                handleLogout={handleLogout}
              />
            ) : (
              <Navigate to='/login' />
            )
          }
        />
        <Route
          exact
          path='/characters/:id'
          element={currentUser ? <CharacterSheet /> : <Navigate to='/login' />}
        />
      </Routes>
    </div>
  )
}

export default App
