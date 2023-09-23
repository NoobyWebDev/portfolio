import { motion } from "framer-motion"

export const NavList = ({ children, textSize, paddingY, paddingX }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.2 }}
      whileFocus={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className={`${textSize} ${paddingY}`}
    >
      <a
        href='#'
        className={`${paddingX} font-light bg-neutral-900  text-neutral-100 focus:text-sky-400 hover:text-sky-400`}
      >
        {children}
      </a>
    </motion.li>
  )
}
