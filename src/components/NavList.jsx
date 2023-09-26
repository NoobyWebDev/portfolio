import { motion } from "framer-motion"

export const NavList = ({
  children,
  textSize,
  paddingY,
  paddingX,
  textColor,
  hovorTextColor,
  hRef,
}) => {
  return (
    <motion.li
      whileHover={{ scale: 1.2 }}
      whileFocus={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className={`${textSize} ${paddingY}`}
    >
      <a
        href={hRef}
        className={`${paddingX} font-light ${textColor} hover:${hovorTextColor}`}
      >
        {children}
      </a>
    </motion.li>
  )
}
