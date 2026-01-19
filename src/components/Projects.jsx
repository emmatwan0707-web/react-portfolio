import React from 'react';
import burgerPic from '../assets/burger.png';
import moviePic from '../assets/moviePic.png';
import mapPic from '../assets/mapPic.png';

const Projects = () => {
    const projectList = [
        {
            id:1,
            title: "Emma Burger Website",
            description: "A responsive restaurant landing page built with React and Tailwind CSS. It features smooth scrolling and menu animations powered by Framer Motion for an engaging dining experience.",
            imageUrl: burgerPic,
        },
        {
            id:2,
            title: "Movie Theater Webpage",
            description: "A dynamic cinema platform showcasing trending movies with a sleek UI. It utilizes Framer Motion for interactive seat selection and Tailwind CSS for a modern, mobile-first design.",
            imageUrl: moviePic,
        },
        {
            id:3,
            title: "Global Projection Tracker",
            description: "A production-ready platform built for the NGO China Action to visualize global activism. Using React and Framer Motion, it features an interactive SVG map with \"breathing\" light markers to document real-world projection events in NYC and Berlin.",
            imageUrl: mapPic,
        },
    ];

    return (
        <div id="projects" className="px-4 sm:px-6 md:px-20 py-16 max-w-7xl mx-auto">
            <h1 className='text-3xl sm:text-4xl md:text-4xl font-bold text-amber-500 mb-8 text-center md:text-left'>
                Recent Projects
            </h1>

            {/* 使用 Grid 布局 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
                {projectList.map((project) => (
                    <div
                        key={project.id}
                        className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-48 sm:h-56 md:h-48 lg:h-50 object-contain"
                        />
                        <div className="p-4">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-600 text-sm sm:text-base">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;
