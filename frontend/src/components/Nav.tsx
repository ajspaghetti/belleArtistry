

// OLD TODO: change from tailwind css to regular css

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    const [isServicesHovered, setIsServicesHovered] = useState(false);

    return (
        <nav className="bg-secondary text-bw-black p-8 shadow-md border border-primary"> {/* Added border */}
            <div className="max-w-7xl mx-auto px-4">
                <ul className="flex justify-between items-center text-2xl"> {/* Increased font size */}
                    <li>
                        <NavLink to="/" end className={({ isActive }) => isActive ? "text-primary font-bold" : "text-bw-gray hover:text-primary"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutme#" className={({ isActive }) => isActive ? "text-primary font-bold" : "text-bw-gray hover:text-primary"}>About Me</NavLink>
                    </li>
                    <li className="relative group"
                        onMouseEnter={() => setIsServicesHovered(true)}
                        onMouseLeave={() => setIsServicesHovered(false)}
                    >
                        <NavLink to="/services" className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-bw-gray hover:text-primary") + " group-hover:text-primary"}>Services</NavLink>
                        {isServicesHovered && (
                            <ul className="absolute left-0 mt-1 bg-secondary p-2 shadow-lg rounded-md border border-primary submenu"> {/* Added custom class for submenu */}
                                <li className="p-2 hover:bg-beige-cool rounded-md">
                                    <NavLink to="/services/hair" className="hover:text-primary">Hair</NavLink>
                                    <ul className="mt-1">
                                        <li><NavLink to="/services/hair/color" className="block hover:text-primary p-2">Color</NavLink></li>
                                        <li><NavLink to="/services/hair/haircuts" className="block hover:text-primary p-2">Haircuts</NavLink></li>
                                        <li><NavLink to="/services/hair/highlights" className="block hover:text-primary p-2">Highlights</NavLink></li>
                                        <li><NavLink to="/services/hair/styles" className="block hover:text-primary p-2">Styles</NavLink></li>
                                        <li><NavLink to="/services/hair/treatments" className="block hover:text-primary p-2">Treatments</NavLink></li>
                                    </ul>
                                </li>
                                <li className="p-2 hover:bg-beige-cool rounded-md">
                                    <NavLink to="/services/eyelashes" className="hover:text-primary">Eyelashes</NavLink>
                                    <ul className="mt-1">
                                        <li><NavLink to="/services/eyelashes/extensions" className="block hover:text-primary p-2">Extensions</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        {/* TODO: Insert Logo here */}
                    </li>
                    <li>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "text-primary font-bold" : "text-bw-gray hover:text-primary"}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/policies" className={({ isActive }) => isActive ? "text-primary font-bold" : "text-bw-gray hover:text-primary"}>Policies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/booknow" className={({ isActive }) => isActive ? "text-primary font-bold" : "text-bw-gray hover:text-primary"}>Book Now</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
