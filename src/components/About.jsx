import React from 'react';
import SkillCircle from './SkillCircle';

const About = () => {
    return (
        <div
            id="about"
            className="flex flex-col md:flex-row items-center md:items-start justify-between px-6 md:px-20 py-16 gap-12 max-w-7xl mx-auto"
        >
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-amber-500">
                    About me
                </h1>
                <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-500 text-justify md:text-left break-words tracking-tight">
                    I enjoy turning complex problems into simple, intuitive user experiences that balance functional logic with aesthetic appeal. I pay close attention to UI details and thrive in collaborative environments where shared ideas lead to better products. To stay at the forefront of the industry, I am constantly exploring new front-end technologies and best practices to refine my craft. My ultimate goal is to deliver high-performance, accessible applications that provide meaningful value while maintaining the highest standards of code quality and visual excellence.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-x-16 md:gap-y-10 flex-1 w-full">
                <SkillCircle name="HTML/CSS" percent={90} />
                <SkillCircle name="JavaScript" percent={75} />
                <SkillCircle name="React" percent={80} />
                <SkillCircle name="Tailwind" percent={55} />
                <SkillCircle name="Git" percent={50} />
                <SkillCircle name="Vite" percent={40} />
            </div>
        </div>
    )
}

export default About;