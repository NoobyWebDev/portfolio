import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { NavList } from "./components/NavList"
import { AnimatePresence, motion } from "framer-motion"
export const Menu = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav((prev) => !prev)
  }
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 1.5,
        ease: [0.12, 1, 0.39, 1],
      },
    },
  }
  return (
    <div>
      <nav className=' text-neutral-100 font-bold font-mono flex py-8 justify-between text-xl'>
        <h1 className='text-2xl'>Shameem_Shahriar</h1>

        {/* menu */}
        <ul className='hidden md:flex gap-8'>
          <NavList
            textSize='text-xl'
            textColor='text-neutral-100'
            hovorTextColor='text-yellow-300'
            hRef='#'
          >
            Home
          </NavList>
          <NavList
            textSize='text-xl'
            textColor='text-neutral-100'
            hovorTextColor='text-yellow-300'
            hRef='#'
          >
            About
          </NavList>
          <NavList
            textSize='text-xl'
            textColor='text-neutral-100'
            hovorTextColor='text-yellow-300'
            hRef='#'
          >
            Skills
          </NavList>
          <NavList
            textSize='text-xl'
            textColor='text-neutral-100'
            hovorTextColor='text-yellow-300'
            hRef='#'
          >
            Project
          </NavList>
          <NavList
            textSize='text-xl'
            textColor='text-neutral-100'
            hovorTextColor='text-yellow-300'
            hRef='https://drive.google.com/file/d/1mrcLIhxMj5m2QcSLv_-V_EhXNMWS-bfV/view?usp=sharing'
          >
            CV
          </NavList>
        </ul>

        {/* Hamburger/mobile menu */}

        <div onClick={handleNav} className='md:hidden z-10'>
          {!nav ? (
            <FaBars className=' w-6 h-6 hover:text-yellow-300' />
          ) : (
            <FaTimes className=' w-6 h-6 text-neutral-900 hover:scale-125' />
          )}
        </div>
        <AnimatePresence>
          <motion.ul
            variants={menuVars}
            initial='initial'
            animate='animate'
            exit='exit'
            className={
              !nav
                ? "hidden"
                : "absolute flex flex-col justify-center items-center w-full h-screen bg-yellow-300 top-0 left-0 origin-top"
            }
          >
            <NavList
              textSize='text-4xl'
              paddingY='py-8'
              paddingX='px-10'
              textColor='text-neutral-900'
              hRef='#'
            >
              Home
            </NavList>
            <NavList
              textSize='text-4xl'
              paddingY='py-8'
              paddingX='px-10'
              textColor='text-neutral-900'
              hRef='#'
            >
              About
            </NavList>
            <NavList
              textSize='text-4xl'
              paddingY='py-8'
              paddingX='px-10'
              textColor='text-neutral-900'
              hRef='#'
            >
              Skills
            </NavList>
            <NavList
              textSize='text-4xl'
              paddingY='py-8'
              paddingX='px-10'
              textColor='text-neutral-900'
              hRef='#'
            >
              Project
            </NavList>
            <NavList
              textSize='text-4xl'
              paddingY='py-8'
              paddingX='px-10'
              textColor='text-neutral-900'
              hRef='https://drive.google.com/file/d/1mrcLIhxMj5m2QcSLv_-V_EhXNMWS-bfV/view?usp=sharing'
            >
              CV
            </NavList>
          </motion.ul>
        </AnimatePresence>
      </nav>
    </div>
  )
}
