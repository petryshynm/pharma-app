import React, { useEffect, useState } from 'react'

import classnames from 'classnames'
import i18n from 'i18next';

import { NavBar } from '../NavBar';
import { languages } from '../../utils';

import './Header.scss'

export const Header = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [isLangOpened, setIsLangOpened] = useState(false);

    useEffect(() => {
        const fixHeader = () => setIsFixed(document.body.scrollTop > 135 || document.documentElement.scrollTop > 135);
        window.removeEventListener('scroll', fixHeader);
        window.addEventListener('scroll', fixHeader, { passive: true });
        return () => window.removeEventListener('scroll', fixHeader);
    })

    return <header className={classnames('header', { 'header_fixed': isFixed })}>
        <div onClick={() => setIsLangOpened(!isLangOpened)} className={classnames('lang-selector', {'lang-selector_opened': isLangOpened})}>
            {languages.map(({lang, Icon}, index) => <Icon key={index} onClick={() => i18n.changeLanguage(lang)}/>)}
        </div>
        <div className="container">
            <img src={`./assets/${isFixed ? 'logo-dark.png' : 'logo.png'}`} alt="logo" className="logo header__logo" />
            <NavBar />
        </div>
    </header>
}