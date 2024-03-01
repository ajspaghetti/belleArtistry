

// OLD TODO: change from tailwind css to regular css

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '..css/Nav.css'

const Nav = () => {
    const [isServicesHovered, setIsServicesHovered] = useState(false);

    return (
        <nav >
            <div>
                <ul>
                    <li>
                        <NavLink to="/" end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutme">About Me</NavLink>
                    </li>
                    <li
                        onMouseEnter={() => setIsServicesHovered(true)}
                        onMouseLeave={() => setIsServicesHovered(false)}
                    >
                        <NavLink to="/services">Services</NavLink>
                        {isServicesHovered && (
                            <ul>
                                <li>
                                    <NavLink to="/services/hair">Hair</NavLink>
                                    <ul>
                                        <li><NavLink to="/services/hair/color">Color</NavLink></li>
                                        <li><NavLink to="/services/hair/haircuts">Haircuts</NavLink></li>
                                        <li><NavLink to="/services/hair/highlights">Highlights</NavLink></li>
                                        <li><NavLink to="/services/hair/styles">Styles</NavLink></li>
                                        <li><NavLink to="/services/hair/treatments">Treatments</NavLink></li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to="/services/eyelashes">Eyelashes</NavLink>
                                    <ul>
                                        <li><NavLink to="/services/eyelashes/extensions">Extensions</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        {/* TODO: Insert Logo here */}
                    </li>
                    <li>
                    <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/policies">Policies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/booknow">Book Now</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
