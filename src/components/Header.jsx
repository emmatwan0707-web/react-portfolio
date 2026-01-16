import React from 'react';
import EmmaImg from '../assets/Emma.png';
import github from '../assets/GitHub.png';
import linkedin from '../assets/LinkedIn.png';
import { Link } from 'react-scroll';

const Header = () => {
    return (


    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-2 bg-[#F5F5F7] shadow-md
">

        <img
                src={EmmaImg}
                alt="Emma"
                className="w-11 h-11 object-contain rounded-full gap-10"
            />
            <ul className="flex gap-4 text-sm text-gray-700 font-medium">
                <li>
                    <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-amber-500">
                        Emma's portfolio
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-amber-500">
                        About me
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-amber-500">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-amber-500">
                        Contact
                    </Link>
                </li>
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
