import React from 'react'
import profilePic from '../assets/profile-pic.jpg'
import { Typewriter } from 'react-simple-typewriter'


const Hero = () => {
    return (
        <div id='hero' className="flex flex-col-reverse md:flex-row items-center md:items-start px-6 ml-8 md:px-8 pt-28 md:pt-40 pb-20 md:pb-32 mx-auto gap-10 md:gap-0">

            <div className='text-center md:text-left md:max-w-lg md:ml-30 flex-1'>
                <h2 className='text-2xl md:text-3xl text-gray-500'>Hi, I'm A</h2>

                <h1 className='text-4xl md:text-7xl mt-2 font-extrabold leading-[1.1] inline-block text-left md:block'>
                    <div className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                        Web
                    </div>

                    <div className="flex items-baseline bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent mt-1">
                        <span>De</span>
                        <span className="inline-block md:min-w-[12ch]">
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

                <p className="text-lg md:text-xl mt-4 text-gray-500">
                    I build modern and responsive <br />web applications with React and Tailwind.
                </p>

                <a
                    href="/Emma_Duan_Resume.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8 px-8 py-3 bg-amber-500 hover:bg-amber-600 shadow-lg text-white font-bold rounded-full transition duration-300 cursor-pointer"
                >
                    View & Download CV
                </a>
            </div>

            <div className='flex-shrink-0 md:mr-30 md:ml-30'>
                <img
                    src={profilePic}
                    alt="Profile picture"
                    className='w-48 md:w-96 h-48 md:h-96 object-cover rounded-full mx-auto'
                />
            </div>
        </div>
    )
}

export default Hero