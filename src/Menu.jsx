import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { NavList } from "./NavList"
import { motion } from "framer-motion"
export const Menu = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav((prev) => !prev)
  }
  console.log(nav)
  return (
    <div>
      <nav className=' text-neutral-100 font-bold font-mono flex py-8 justify-between text-xl'>
        <h1 className='text-2xl'>Shameem_Shahriar</h1>

        {/* menu */}
        <ul className='hidden md:flex gap-8'>
          <NavList textSize='text-xl'>Home</NavList>
          <NavList textSize='text-xl'>About</NavList>
          <NavList textSize='text-xl'>Skills</NavList>
          <NavList textSize='text-xl'>Project</NavList>
          <NavList textSize='text-xl'>CV</NavList>
        </ul>

        {/* Hamburger/mobile menu */}

        <div onClick={handleNav} className='md:hidden z-10'>
          {!nav ? (
            <FaBars className=' w-6 h-6 hover:text-sky-400' />
          ) : (
            <FaTimes className=' w-6 h-6 hover:text-sky-400' />
          )}
        </div>

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute flex flex-col justify-center items-center w-full h-screen bg-neutral-900 top-0 left-0 "
          }
        >
          <NavList textSize='text-4xl' paddingY='py-8' paddingX='px-10'>
            Home
          </NavList>
          <NavList textSize='text-4xl' paddingY='py-8' paddingX='px-10'>
            About
          </NavList>
          <NavList textSize='text-4xl' paddingY='py-8' paddingX='px-10'>
            Skills
          </NavList>
          <NavList textSize='text-4xl' paddingY='py-8' paddingX='px-10'>
            Project
          </NavList>
          <NavList textSize='text-4xl' paddingY='py-8' paddingX='px-10'>
            CV
          </NavList>
        </ul>
      </nav>
    </div>
  )
}
