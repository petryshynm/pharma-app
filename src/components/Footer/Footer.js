import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTranslation } from 'react-i18next';

import './Footer.scss';

export const Footer = () => {
    const { t } = useTranslation();
    
    return <footer className='footer'>
        <div className='footer__upper-border'></div>
        <div className='container'>
            <AnchorLink href="#home_link">
                <img src='./assets/logo-dark.png' alt="logo"/>
            </AnchorLink>
            {t('copyrights')}
        </div>
    </footer>
}