// src/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="p-4" id='back'>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white font-bold text-lg">
                    TITO
                </div>

                {/* Hamburger Icon */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Navbar Links */}
                <div className={`lg:flex lg:items-center space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
                    <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500">Home</a>
                    <a href="/blog" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500">BLOG</a>
                    <a href="/recipe" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500">RECIPES</a>
                    <a href="/audio" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500">PODCASTS</a>
                    <a href="/books" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500">EBOOKS</a>
                    <a href="/gallery" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500">GALLERY</a>
                    <a href="/login" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500">LOGIN</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
