import { Button } from '../ClassicButton';
import { useTranslation } from 'react-i18next';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import backgroundImage from '../../resources/images/bg2.jpeg';

import './Suppliers.scss'

export const Suppliers = () => {
    const { t } = useTranslation()

    return <section className='suppliers' id="suppliers_id" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='container'>
            <div className='suppliers__title'>{t('suppliers_title')}</div>
            <div className='suppliers__subtitle'>{t('suppliers_subtitle')}</div>
            <AnchorLink href="#contact_link">
              <Button value={t('get_started')} isInverted className="suppliers__button" />
            </AnchorLink>   
        </div>
    </section>
}