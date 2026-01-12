import React from 'react';
import EmmaImg from '../assets/Emma.png';
import github from '../assets/GitHub.png';
import linkedin from '../assets/LinkedIn.png';

const Header = () => {
    return (


    <nav className="relative flex items-center justify-between px-6 py-4 bg-[#F5F5F7] -mt-[5px]">

        <img
                src={EmmaImg}
                alt="Emma"
                className="w-11 h-11 object-contain rounded-full gap-10"
            />
            <ul className="flex gap-4 text-sm text-gray-700 font-medium">
                <li className="cursor-pointer  text-gray-700 hover:text-black text-sm">About me</li>
                <li className="cursor-pointer  text-gray-700 hover:text-black text-sm">Projects</li>
                <li className="cursor-pointer  text-gray-700 hover:text-black text-sm">Skills</li>
                <li className="cursor-pointer  text-gray-700 hover:text-black text-sm">Contact</li>
            </ul>
        <div className="flex gap-4">
            <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/emma-huanchen-duan-0baa06254/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" className="w-5 h-5 object-contain rounded-full" />
                </a>

                <a href="https://github.com/emmatwan0707-web" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" className="w-5 h-5 object-contain rounded-full" />
                </a>
            </div>

        </div>

    </nav>


    );
};

export default Header;
