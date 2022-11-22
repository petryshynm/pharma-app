import React, { useState } from 'react'

import classnames from 'classnames'
import ReactPlayer from "react-player";

import { ProgressBar } from '../ProgressBar';
import { Modal } from '../Modal';

import tabImage from '../../resources/images/2.jpg';
import videoThumbnail from '../../resources/images/3.jpg';

import './Approach.scss'

const approachTabs = [
    'Our Approach',
    'Services'
]



export const Approach = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [isOpen, setOpenModal] = useState(false)
    
    const renderApproachText = () => {
        switch (tabIndex) {
            case 0:
                return <>
                    <div className="approach__title">Our Approach</div>
                    <div className="approach__subtitle">We are a dedicated team of truly passionate, professionals who understand our clients’ needs and wants.</div>
                    <ProgressBar label="Passionate" value={90}/>
                    <ProgressBar label="Professionals" value={75}/>
                    <ProgressBar label="Trust" value={80}/>
                </>
            case 1:
                return <>
                    <div className="approach__title">Services</div>
                    <div className="approach__subtitle">We Are A Creative Agency.</div>
                    <p>
                        <span>One of our top priorities is to provide our customers with a five-star level of service.</span> our customers with a five-star level of service.
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
                    {approachTabs.map((tab, index) => (
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