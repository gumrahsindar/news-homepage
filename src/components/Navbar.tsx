import { useState } from 'react'
import { Logo } from './Logo'
import clsx from 'clsx'

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = ['Home', 'New', 'Popular', 'Trending', 'Categories'].map((item, index) => (
    <li key={index} className='cursor-pointer  duration-200 hover:text-soft-red'>
      {item}
    </li>
  ))

  return (
    // Navbar Container

    <>
      <div
        className={clsx(
          'md:hidden',
          isMenuOpen
            ? 'overlay fixed left-0 top-0 isolate z-10 h-full w-full bg-black/50 transition-transform duration-300'
            : 'hidden',
        )}
      />
      <div>
        {/* logo & menu items container */}
        <nav className='relative flex items-center justify-between'>
          <Logo />
          {/* menu items */}
          <ul className='hidden items-center gap-x-10 md:flex'>{menuItems}</ul>
          {/* hamburger menu */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='z-20 md:hidden'>
            {isMenuOpen ? (
              <svg width='32' height='31' xmlns='http://www.w3.org/2000/svg'>
                <g fill='#00001A' fill-rule='evenodd'>
                  <path d='m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z' />
                  <path d='M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z' />
                </g>
              </svg>
            ) : (
              <svg width='40' height='31' xmlns='http://www.w3.org/2000/svg'>
                <g fill='#00001A' fill-rule='evenodd'>
                  <path d='M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z' />
                  <path d='M0 0h40v3H0z' />
                </g>
              </svg>
            )}
          </button>
        </nav>
        {/* mobile menu */}
        <nav>
          <ul
            className={clsx(
              'md:hidden',
              isMenuOpen
                ? 'absolute right-0 top-0 z-10 flex min-h-screen w-3/4 flex-col space-y-6 bg-off-white pl-10 pt-44 text-lg text-dark-blue'
                : 'hidden',
            )}
          >
            {menuItems}
          </ul>
        </nav>
      </div>
    </>
  )
}
