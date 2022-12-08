import { useState } from "react";

import { useTranslation } from 'react-i18next';

import { ReactComponent as Email } from "../../resources/icons/email.svg";
import { ReactComponent as Address } from "../../resources/icons/address.svg";
import { Button } from '../ClassicButton';
import { FeedbackForm } from '../FeedbackForm';

import './Contacts.scss'

export const Contacts = () => {
    const {t} = useTranslation()
    const [isSending, setSending] = useState(false)

    return <div className="contacts" id="contact_link">
        <div className='container'>
            <div className='contacts__heading'>
                <div className='contacts__title'>
                    {t('contacts_title')} <span>{t('contacts_title-bold')}</span> 
                </div>
                <div className='contacts__subtitle'>{t('contacts_subtitle')}</div>
            </div>
            <div className='contacts__content'>
                <div className='contacts__content-addresses'>
                    <span>{t('contact_us')}:</span>
                    <div>
                        <div className='contacts__item'>
                            <div className='contacts__item-icon'>
                                <Email />
                            </div>
                            <div className='contacts__item-info' input-type="email">
                                <div className='contacts__item-title'>{t('email')}:</div>
                                <a href="mailto: info@vetmedpharma.com">info@vetmedpharma.com</a>
                            </div>
                        </div>
                        <div className='contacts__item'>
                            <div className='contacts__item-icon'>
                                <Address />
                            </div>
                            <div className='contacts__item-info'>
                                <div className='contacts__item-title'>{t('address')}:</div>
                                Str. Mitropolit Gavriil Bänulescu-Bodoni, n.24. Chisinäu, MD-2012, Republic of  Moldova. 
                            </div>
                        </div>
                    </div>
                </div>
                <FeedbackForm 
                    classNames='contacts__content-feedback' 
                    isSending={isSending} 
                    setSending={setSending} 
                />
            </div>
            <Button isDisabled={isSending} form="form" type="submit" value={t('send_message')} isInverted/>
        </div>
    </div>
}