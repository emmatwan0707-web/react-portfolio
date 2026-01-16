import React from 'react';
import burgerPic from '../assets/burger.png';
import moviePic from '../assets/moviePic.png';
import recipePic from '../assets/recipePic.png';


const Projects = () => {
    // 你可以用数组存项目数据
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
            title: "Recipe Search Web App",
            description: "A fast and intuitive recipe discovery tool using React to fetch real-time culinary data. It provides a seamless user interface with Tailwind layout and fluid list transitions via Framer Motion.",
            imageUrl: recipePic,
        },

    ];

    return (
        <div id="projects">
        <h1 className='ml-20 text-4xl font-bold text-amber-500 mb-5'>Recent Projects</h1>
        <div className="flex flex-wrap justify-evenly gap-6 mb-10 ">
            {projectList.map((project) => (
                <div
                    key={project.id}
                    className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden w-full md:w-1/4 hover:scale-105 transition-transform duration-300"
                >
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )

}
export default Projects
