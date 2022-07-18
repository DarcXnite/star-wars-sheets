import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ currentUser, handleLogout }) {
  const [menuToggle, setMenuToggle] = useState(false)

  // return <nav>{currentUser ? loggedIn : loggedOut}</nav>
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
                <a
                  href='/profile'
                  className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                  aria-current='page'
                >
                  Your Profile
                </a>
                <div
                  onClick={() => handleLogout()}
                  className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer'
                  aria-current='page'
                >
                  Sign Out
                </div>
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
                className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                aria-current='page'
              >
                Your Profile
              </a>
            </div>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <div
                onClick={() => handleLogout()}
                className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium hover:cursor-pointer'
                aria-current='page'
              >
                Sign Out
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <a
                href='#'
                className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                aria-current='page'
              >
                Register
              </a>
            </div>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <a
                href='#'
                className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                aria-current='page'
              >
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
