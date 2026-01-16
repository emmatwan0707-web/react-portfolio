import React from 'react'
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import email from "../assets/email.png";

const Footer = () => {
    return (
        <footer className="flex flex-col sm:flex-row justify-between items-center p-6 bg-gray-100 mt-10 mb-10 gap-4 sm:gap-0">
            <p className="text-gray-600 text-center sm:text-left">
                © 2026 Emma Twan. Let’s build something awesome!
            </p>

            <div className="flex gap-6 mt-4 sm:mt-0">
                <a href="https://www.linkedin.com/in/emma-huanchen-duan-0baa06254/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" className="w-12 sm:w-10 h-12 sm:h-10 object-contain rounded-full" />
                </a>

                <a href="https://github.com/emmatwan0707-web" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" className="w-12 sm:w-10 h-12 sm:h-10 object-contain rounded-full" />
                </a>

                <a href="mailto:emmatwan0707@gmail.com">
                    <img src={email} alt="Email" className="w-12 sm:w-10 h-12 sm:h-10 object-contain rounded-full" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;
