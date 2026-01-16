import React from 'react';
import EmmaImg from '../assets/Emma.png';
import github from '../assets/GitHub.png';
import linkedin from '../assets/LinkedIn.png';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#F5F5F7]/90 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

                <div className="flex items-center">
                    <img
                        src={EmmaImg}
                        alt="Emma"
                        className="w-10 h-10 object-contain rounded-full"
                    />
                </div>

                <ul className="hidden md:flex gap-8 text-sm text-gray-700 font-medium items-center">
                    <li>
                        <Link to="hero" smooth={true} duration={500} offset={-100} className="cursor-pointer hover:text-amber-500 transition">
                            Emma's portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-amber-500 transition">
                            About me
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500} offset={-60} className="cursor-pointer hover:text-amber-500 transition">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-amber-500 transition">
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className="flex items-center gap-5">
                    <a href="https://www.linkedin.com/in/emma-huanchen-duan-0baa06254/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                        <img src={linkedin} alt="LinkedIn" className="w-5 h-5 object-contain" />
                    </a>
                    <a href="https://github.com/emmatwan0707-web" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                        <img src={github} alt="GitHub" className="w-5 h-5 object-contain" />
                    </a>
                </div>

            </div>
        </nav>
    );
};

export default Header;