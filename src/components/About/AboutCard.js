import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import classnames from 'classnames'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

import './About.scss'

const images = [
    '/assets/doc1.jpg',
    '/assets/doc2.jpg',
    '/assets/doc3.jpg',
]

export const AboutCard = ({ card: { label, icon , link }, index}) => {
    const { t } = useTranslation()
    const [infoOpened, setIsInfoOpen] = useState(false)
    const [lightboxOpened, setIsLightboxOpened] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    const renderAdditionalInfo = () => {
        return <>
            <span className={classnames({'info_opened': infoOpened})} onClick={() => setIsInfoOpen(prev => !prev)}>{t(link.label)}</span>
            <div className={classnames('card__info', { 'card__info_opened': infoOpened})}>
                {images.map((img, index) => (
                    <img 
                        key={index}
                        alt={`Document #${index}`} 
                        src={img} 
                        onClick={() => {
                            setPhotoIndex(index)
                            setIsLightboxOpened(true)
                        }} 
                    />
                ))}
            </div>
        </>
    } 

    useEffect(() => {
        document.body.style.overflow = lightboxOpened ? 'hidden' : 'visible';
    }, [lightboxOpened])
    

    return <>
        {lightboxOpened ? <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsLightboxOpened(false)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        /> : null}
        <div key={index} className="about__card card">   
            <div className="card__icon-container">{icon}</div>
            <div className="card__title">{t(`about_${label}_title`)}</div>
            <div className="card__subtitle">
                {t(`about_${label}_subtitle`)}
                <br/>
                {link ? renderAdditionalInfo() : null}
            </div>
        </div>
    </>
}