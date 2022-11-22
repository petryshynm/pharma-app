import './About.scss'

import { ReactComponent as Pen } from "../../resources/icons/pen.svg";
import { ReactComponent as Anchor } from "../../resources/icons/anchor.svg";
import { ReactComponent as PlayingCard } from "../../resources/icons/playing-card.svg";

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
                <div className="about__card card">
                    <div className="card__icon-container"><Anchor className="card__icon"/></div>
                    <div className="card__title">Quality Standards</div>
                    <p className="card__subtitle">At the heart of our approach are designed strict quality standards.</p>
                </div>
                <div className="about__card card card_above">
                    <div className="card__icon-container"><Pen className="card__icon"/></div>
                    <div className="card__title">Long-term Relationships</div>
                    <p className="card__subtitle">We have developed long-term relationships with suppliers and customers to develop our highly successful business.</p>
                </div>
                <div className="about__card card">
                    <div className="card__icon-container"><PlayingCard className="card__icon"/></div>
                    <div className="card__title">Clients’ needs</div>
                    <p className="card__subtitle">Knowing the expectations and needs of your customers is the key to your business performance.</p>
                </div>
            </div>
        </div>
        <div className="about__border"/>
    </section>
}