import React from 'react'
import profilePic from '../assets/profile-pic.jpg'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-start px-6 md:px-8 pt-22 pb-32 mx-auto gap-0">

            <div className='text-center md:text-left md:max-w-lg md:ml-30 flex-1'>
                <h2 className='text-3xl text-gray-500'>Hi, I'm A</h2>

                <h1 className='text-6xl md:text-7xl mt-2 font-extrabold leading-[1.1]'>
                    <div className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                        Web
                    </div>

                    <div className="flex items-baseline justify-center md:justify-start bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent mt-1">
                        <span>De</span>
                        <span className="inline-block min-w-[12ch]">
              <Typewriter
                  words={['veloper.', 'signer.']}
                  loop={0}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
              />
            </span>
                    </div>
                </h1>

                <p className="text-xl mt-4 text-gray-500">
                    I build modern and responsive <br />web applications with React and Tailwind.
                </p>

                <a href='#' target="_blank" aria-label="Download Emma Duan CV" className="inline-block mt-8 px-8 py-3 bg-amber-500 hover:bg-amber-600 shadow-orange-200 text-white font-bold rounded-full transition duration-300 cursor-pointer outline-none">
                    Download CV
                </a>
            </div>


            <div className='flex-shrink-0 md:mr-30 md:ml-30'>
                <img
                    src={profilePic}
                    alt="Profile picture"
                    className='w-64 md:w-96 h-64 md:h-96 object-cover rounded-full mx-auto'
                />
            </div>
        </div>
    )
}

export default Hero
