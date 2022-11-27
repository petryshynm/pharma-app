import React, { useState } from 'react'

import classnames from 'classnames'
import ReactPlayer from "react-player";
import { useTranslation } from 'react-i18next';

import { ProgressBar } from '../ProgressBar';
import { Modal } from '../Modal';

import './Approach.scss'

export const Approach = () => {
    const { t } = useTranslation()
    const [tabIndex, setTabIndex] = useState(0)
    const [isOpen, setOpenModal] = useState(false)
    
    const renderApproachText = () => {
        switch (tabIndex) {
            case 0:
                return <>
                    <div className="approach__title">{t('approach')}</div>
                    <div className="approach__subtitle">{t('approach_subtitle')}</div>
                    <ProgressBar label={t('passionate')} value={90}/>
                    <ProgressBar label={t('professionals')} value={75}/>
                    <ProgressBar label={t('trust')} value={80}/>
                </>
            case 1:
                return <>
                    <div className="approach__title">{t('approach-services')}</div>
                    <div className="approach__subtitle">{t('approach-services_title')}</div>
                    <p>
                        <span>{t('approach-services_subtitle-bold')}</span>{t('approach-services_subtitle')}
                    </p>
                </>
            default:
                break;
        }
    }

    const renderApproachMedia = () => {
        switch (tabIndex) {
            case 0:
                return <img src='./assets/2.jpg' alt="Our Approach"/>
            case 1:
                return <>
                    <img src='./assets/3.jpg' alt="Services"/>
                    <button onClick={() => setOpenModal(true)}/>
                </>
            default:
                break;
        }
    }


    return <section id="approach_link" className="approach">
        <div className="container">
            <div className="approach__navigation">
                <div className="approach__tabs">
                    {[t('approach'), t('approach-services')].map((tab, index) => (
                        <div
                            key={index}
                            className={classnames('tab', {
                            'tab_selected': tabIndex === index
                            })}
                            onClick={()=>setTabIndex(index)}
                            >{tab}
                        </div>
                    ))}
                </div>
                <div className="approach__text">{renderApproachText(tabIndex)}</div>
            </div>
            <div className="approach__media">{renderApproachMedia(tabIndex)} </div>
        </div>
        <Modal isOpen={isOpen} handleClose={() => setOpenModal(false)}>
            <ReactPlayer
                url="https://vimeo.com/291715535"
                width="100%"
                height="calc(100vh - 100px)"
            />
        </Modal>
    </section>
}