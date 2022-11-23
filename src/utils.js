// import lamp from '../../resources/icons/pen.svg';
// import lamp from '../../resources/icons/pen.svg';
// import lamp from '../../resources/icons/pen.svg';
// import lamp from '../../resources/icons/pen.svg';

import { ReactComponent as Pen } from "./resources/icons/pen.svg";
import { ReactComponent as Anchor } from "./resources/icons/anchor.svg";
import { ReactComponent as PlayingCard } from "./resources/icons/playing-card.svg";
import { ReactComponent as Bulb } from "./resources/icons/bulb.svg";
import { ReactComponent as Note } from "./resources/icons/note.svg";
import { ReactComponent as Ruler } from "./resources/icons/ruler.svg";
import { ReactComponent as Server } from "./resources/icons/server.svg";
import { ReactComponent as Monitor } from "./resources/icons/monitor.svg";
import { ReactComponent as Picture } from "./resources/icons/picture.svg";
import { ReactComponent as Headphones } from "./resources/icons/headphones.svg";

export const navLinks = [
    {
        label:'Home',
        id: "home_link"
    }, 
    {
        label:'About',
        id: "about_link"
    }, 
    {
        label:'Our Approach',
        id: "approach_link"
    }, 
    {
        label:'Our Clients',
        id: "clients_link"
    }, 
    {
        label:'Services',
        id: "services_link"
    }, 
    {
        label:'Contact',
        id: "contact_link"
    }
]

export const aboutCards = [
    {
        title: 'Quality Standards',
        subtitle: 'At the heart of our approach are designed strict quality standards.',
        icon: <Anchor className="card__icon"/>
    },
    {
        title: 'Long-term Relationships',
        subtitle: 'We have developed long-term relationships with suppliers and customers to develop our highly successful business.',
        icon: <Pen className="card__icon"/>
    },
    {
        title: 'Clients’ needs',
        subtitle: 'Knowing the expectations and needs of your customers is the key to your business performance.',
        icon: <PlayingCard className="card__icon"/>
    },
]

export const clientCards = [
    {
        label: 'Academic Pharmaceutical companies',
        icon: <Bulb />
    },
    {
        label: 'Contract pharma',
        icon: <Note />
    },
    {
        label: 'Private-label',
        icon: <Ruler />
    },
    {
        label: 'Government organizations',
        icon: <Server />
    }
]

export const servicesCards = [
    {
        label: 'Specialty Pharma Companies',
        icon: <Monitor />
    },
    {
        label: 'R&D & Formulation Companies',
        icon: <Picture />
    },
    {
        label: 'Chemical Catalog Companies',
        icon: <Headphones />
    },
    {
        label: 'Specialty Pharma Companies',
        icon: <Monitor />
    },
    {
        label: 'Chemical Catalog Companies',
        icon: <Picture />
    },
    {
        label: 'Specialty Pharma Companies',
        icon: <Headphones />
    }
]

