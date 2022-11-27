import './Home.scss';

import { Button } from '../ClassicButton';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useTranslation } from 'react-i18next';

import backgroundImage from '../../resources/images/bg4.jpg';

export const Home = () => {
    const { t } = useTranslation();
    return  <section id="home_link" style={{ backgroundImage: `url(${backgroundImage})` }} className="home">
        <div className='container'>
          <div className="home__content">
            <div className="home__title">
              {t("home_title")}
              <div>{t('home_title-bold')}</div>
            </div>
            <div className="home__subtitle">
              {t('home_subtitle')}
            </div>
            <AnchorLink href="#contact_link">
              <Button value={t('get_started')} className="home__button" />
            </AnchorLink>   
          </div>
        </div>
        <div className="home__border"/>
    </section>
}