import './About.scss'

import { aboutCards } from '../../utils';


export const About = () => {
    return  <section id="about_link" className="about">
        <div className="container">
            <div className="about__title">
                About Our <span>BT Pharma</span> Albania
            </div>
            <p className="about__subtitle">
                BT Pharma Albania is a specialty broker. With years of experience and expertise we can offer a broad and reliable network to national and international partners in the pharmaceutical and chemical industry.
            </p>
            <div className="about__cards">
                {aboutCards.map(({ title, subtitle, icon }, index) => (
                    <div key={index} className="about__card card">
                        <div className="card__icon-container">{icon}</div>
                        <div className="card__title">{title}</div>
                        <p className="card__subtitle">{subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="about__border"/>
    </section>
}