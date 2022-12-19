import React, { useEffect, useState } from 'react'

import AnchorLink from 'react-anchor-link-smooth-scroll'
import classnames from 'classnames'
import { useTranslation } from 'react-i18next';

import './NavBar.scss'

import { navLinks, useMediaQuery } from '../../utils'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home_link');
    const [isOpen, setIsOpen] = useState(false);
    const isBurgerMenu = useMediaQuery('(max-width: 768px)')

    const { t } = useTranslation()

    console.log(activeLink);
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

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'visible';
    }, [isOpen])

    return <nav className={classnames("navbar", {
        'navbar_opened': isOpen,
        })}>
        {isBurgerMenu && <button 
            className={classnames('navbar__button', {'navbar__button_opened' : isOpen})} 
            onClick={()=>{setIsOpen(!isOpen)}}>
            <span></span>
            <span></span>
            <span></span>
        </button>}
        {<div className='navbar__links'>
            {navLinks.map((link, index) => (
                <AnchorLink
                    offset='135'
                    href={`#${link}`}
                    key={index}
                    className={classnames({'active': activeLink === link})}    
                >
                    {t(link)}
                </AnchorLink>
            ))}
        </div>}
    </nav>
}