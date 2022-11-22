import React, { useEffect,  useState } from 'react'

import AnchorLink from 'react-anchor-link-smooth-scroll'
import classnames from 'classnames'

import './NavBar.scss'

import { navLinks } from '../../utils'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home_link');
    
    useEffect(() => {
        const activateLink = () => {
            let section = document.querySelectorAll('section');
            let headerHeight = document.querySelector('header').offsetHeight;
            section.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop;
                let height = sec.offsetHeight;
                if (top >= offset - headerHeight && top < offset + height - headerHeight) {
                    let id = sec.getAttribute('id');
                    setActiveLink(id)
                }
            })
        }
        window.removeEventListener('scroll', activateLink);
        window.addEventListener('scroll', activateLink, { passive: true });
        return () => window.removeEventListener('scroll', activateLink);
    })

    return <nav className="navbar">
        {navLinks.map(({id, label}, index) => (
            <AnchorLink
                offset='135'
                href={`#${id}`}
                key={index}
                className={classnames({'active': activeLink === id})}    
            >
                {label}
            </AnchorLink>
        ))}
    </nav>
}