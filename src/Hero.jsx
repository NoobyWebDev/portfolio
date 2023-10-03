import React from "react"
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai"

export const Hero = () => {
  return (
    <div className='text-neutral-100 flex flex-col justify-center items-center gap-2 text-center mt-4'>
      <h2 className='text-4xl font-semibold text-yellow-300'>
        Shameem Shahriar
      </h2>
      <h3 className='text-xl py-4 '>Frontend developer and designer.</h3>
      <p className='leading-6'>
        Design-Driven Frontend Developer. Creating User-Friendly Designs with
        Code. Connect with me and let&apos;s get started.
      </p>
      <div className='py-4 flex gap-8 text-3xl mt-2'>
        <a
          href='https://www.facebook.com/Shahriarshaan1190'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiFillFacebook className='hover:scale-110 hover:text-yellow-300' />
        </a>
        <a
          href='https://www.facebook.com/Shahriarshaan1190'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiFillTwitterCircle className='hover:scale-110 hover:text-yellow-300' />
        </a>
        <a
          href='https://www.facebook.com/Shahriarshaan1190'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiFillLinkedin className='hover:scale-110 hover:text-yellow-300' />
        </a>
        <a
          href='https://www.facebook.com/Shahriarshaan1190'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiFillGithub className=' hover:text-yellow-300 hover:scale-110' />
        </a>
      </div>
      <a
        href='https://drive.google.com/file/d/1mrcLIhxMj5m2QcSLv_-V_EhXNMWS-bfV/view?usp=sharing'
        target='_blank'
        rel='noopener noreferrer'
        className='text-xl text-yellow-300 border-yellow-300 border-2 p-2 mt-6 hover:border-yellow-200 hover:text-yellow-200'
      >
        Download CV
      </a>
      <div className='relative'>
        <img src='' alt='' />
      </div>
    </div>
  )
}
