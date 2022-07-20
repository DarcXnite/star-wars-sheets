import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ currentUser, handleLogout }) {
  const [menuToggle, setMenuToggle] = useState(false)

  useEffect(() => {
    const toggle = () => {
      if (window.innerWidth > 640) {
        if (menuToggle) {
          console.log('toggled')
          setMenuToggle(false)
        }
      }
    }

    window.addEventListener('resize', toggle)

    return () => {
      window.removeEventListener('resize', toggle)
    }
  })

  return (
    <nav className='bg-gray-800'>
      <div className=' mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='flex flex-row-reverse items-center justify-between h-16'>
          <div className='inset-y-0 left-0 flex items-center sm:hidden'>
            {/* hamburger button for small screens */}
            <button
              onClick={() => setMenuToggle(!menuToggle)}
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>

              <svg
                className='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>

              <svg
                className='hidden h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
            {/* end of hamburger button */}
          </div>
          <div className='flex-1 flex items-center justify-between sm:items-stretch sm:justify-between'>
            {/* Logo */}

            <div className='flex-shrink-0 flex flex-row items-center'>
              <Link to={`/`}>
                <img
                  className='block lg:hidden h-8 w-auto'
                  src='/images/starwarsSheets.gif'
                  alt='Star Wars'
                />
                <img
                  className='hidden lg:block h-8 w-auto'
                  src='/images/starwarsSheets.gif'
                  alt='Star Wars'
                />
              </Link>
              <Link to={`/`}>
                <span className='text-white ml-2 starjedi'>
                  Star Wars Sheets
                </span>
              </Link>
            </div>

            {/* end of logo */}
            <div className={`sm:block sm:ml-6 hidden`}>
              <div className='flex space-x-4'>
                {/* darkmode toggler */}
                {/* <div>
                  <input type='checkbox' className='checkbox' id='checkbox' />
                  <label for='checkbox' className='label'>
                    <img
                      className='w-4'
                      src='/images/triumph.png'
                      alt='light'
                    />
                    <img
                      className='w-4'
                      src='/images/despair.png'
                      alt='light'
                    />
                    <div className='ball'></div>
                  </label>
                </div> */}
                {/* end of darkmode toggler */}
                {currentUser ? (
                  <React.Fragment>
                    <a
                      href='/profile'
                      className='starjedi flex bg-gray-900 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'
                      aria-current='page'
                    >
                      <span className='material-symbols-outlined mr-2'>
                        account_circle
                      </span>
                      <span>Your Profile</span>
                    </a>
                    <div
                      onClick={() => handleLogout()}
                      className='bg-gray-900 flex starjedi hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer'
                      aria-current='page'
                    >
                      <span className='material-symbols-outlined mr-2'>
                        logout
                      </span>
                      <span>Sign out</span>
                    </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <a
                      href='/'
                      className='starjedi flex bg-gray-900 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'
                      aria-current='page'
                    >
                      <span className='material-symbols-outlined mr-2'>
                        login
                      </span>
                      <span>Login</span>
                    </a>
                    <a
                      href='/register'
                      className='bg-gray-900 flex starjedi hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer'
                      aria-current='page'
                    >
                      <span className='material-symbols-outlined mr-2'>
                        how_to_reg
                      </span>
                      <span>Register</span>
                    </a>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* drop down menu for smaller screens */}
      <div
        className={`sm:ml-6 ${!menuToggle ? 'hidden' : ''}`}
        id='mobile-menu'
      >
        {currentUser ? (
          <div>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <a
                href='/profile'
                className='bg-gray-900 flex starjedi hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'
                aria-current='page'
              >
                <span className='material-symbols-outlined mr-2'>
                  account_circle
                </span>
                <span>Your Profile</span>
              </a>
            </div>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <div
                onClick={() => handleLogout()}
                className='bg-gray-900 flex starjedi hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium hover:cursor-pointer'
                aria-current='page'
              >
                <span className='material-symbols-outlined mr-2'>logout</span>
                <span>Sign out</span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <a
                href='/register'
                className='starjedi flex bg-gray-900 hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'
                aria-current='page'
              >
                <span className='material-symbols-outlined mr-2'>
                  how_to_reg
                </span>
                <span>Register</span>
              </a>
            </div>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <a
                href='/'
                className='starjedi flex bg-gray-900 hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'
                aria-current='page'
              >
                <span className='material-symbols-outlined mr-2'>login</span>
                <span>Login</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
