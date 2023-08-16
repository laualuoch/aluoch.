import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium, faLinkedin } from '@fortawesome/free-solid-svg-icons';
import { faGithub as faGithubBrands } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Icon = ({item}) => {
    return (
        <FontAwesomeIcon icon={item} className="p-2 text-white text-xl cursor-pointer" />
    );
        
}

const Socials = ({}) => {
    const iconItems = [
        {item:"gitHub", icon: faGithubBrands, link:"https://github.com/aluoch-dev/"},
        {item:"medium", icon: faGithubBrands, link:"https://medium.com/@aluoch-laurine"},
        {item:"linkedin", icon: faGithubBrands, link:"https://www.linkedin.com/in/aluoch-laurine/"}
    ];
    
    return (
        <div className="container mx-auto px-4">
            <ul class="py-3">
                {iconItems.map(({icon, link})=> (
                    <Link to={link}>
                        <Icon item={icon} />
                    </Link>
                ))}
            </ul>
        </div>
    )
}


export default Socials;