import React, { useEffect, useState } from 'react'

import classnames from 'classnames'

import { NavBar } from '../NavBar';

import './Header.scss'

export const Header = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const fixHeader = () => setIsFixed(document.body.scrollTop > 135 || document.documentElement.scrollTop > 135);
        window.removeEventListener('scroll', fixHeader);
        window.addEventListener('scroll', fixHeader, { passive: true });
        return () => window.removeEventListener('scroll', fixHeader);
    })

    return <header className={classnames('header', { 'header_fixed': isFixed })}>
        <div className="container">
            <img src={`./assets/${isFixed ? 'logo-dark.jpg' : 'logo.png'}`} alt="logo" className="logo header__logo" />
            <NavBar />
        </div>
    </header>
}