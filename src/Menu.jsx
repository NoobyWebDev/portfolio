import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export const Menu = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav((prev) => !prev)
  }
  console.log(nav)
  return (
    <div>
      <nav className=' text-sky-200 font-bold font-mono flex py-8 justify-between text-xl'>
        <h1 className='text-2xl'>Shameem_Shahriar</h1>

        {/* menu */}
        <ul className='hidden md:flex gap-4'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Skills</a>
          </li>
          <li>
            <a href='#'>Projects</a>
          </li>
          <li className='  bg-gray-600 text-white ml-2 rounded'>
            <a href='#' className='p-8 '>
              CV
            </a>
          </li>
        </ul>

        {/* Hamburger/mobile menu */}

        <div onClick={handleNav} className='md:hidden z-10'>
          {!nav ? (
            <FaBars className=' w-6 h-6' />
          ) : (
            <FaTimes className=' w-6 h-6' />
          )}
        </div>

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute flex flex-col justify-center items-center w-full h-screen bg-gray-800 top-0 left-0 "
          }
        >
          <li className='py-8 text-4xl'>
            <a
              href='#'
              className='px-10 text-sky-200 bg-gray-800 rounded hover:bg-sky-200 hover:text-gray-800'
            >
              Home
            </a>
          </li>
          <li className='py-8 text-4xl'>
            <a
              href='#'
              className='px-10 text-sky-200 bg-gray-800 rounded hover:bg-sky-200 hover:text-gray-800'
            >
              About
            </a>
          </li>
          <li className='py-8 text-4xl'>
            <a
              href='#'
              className='px-10 text-sky-200 bg-gray-800 rounded hover:bg-sky-200 hover:text-gray-800'
            >
              Skills
            </a>
          </li>
          <li className='py-8 text-4xl '>
            <a
              href='#'
              className='px-10 text-sky-200 bg-gray-800 rounded hover:bg-sky-200 hover:text-gray-800'
            >
              Projects
            </a>
          </li>
          <li className='py-8 text-4xl'>
            <a
              href='#'
              className='px-10 text-sky-200 bg-gray-800 rounded hover:bg-sky-200 hover:text-gray-800'
            >
              CV
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
