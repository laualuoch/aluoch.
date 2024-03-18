import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub as faGithubBrands, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Icon = ({item}) => {
    return (
        <FontAwesomeIcon icon={item} className="p-2 text-beige text-xl cursor-pointer" />
    );
        
}

const Socials = ({}) => {
    const iconItems = [
        {item:"gitHub", icon: faGithubBrands, link:"https://github.com/aluoch-dev/"},
        {item:"medium", icon: faMediumM, link:"https://medium.com/@aluoch"},
        {item:"linkedin", icon: faLinkedinIn, link:"https://www.linkedin.com/in/aluoch-laurine/"}
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