import { useEffect, useState } from 'react'

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
import { ReactComponent as MD } from "./resources/icons/md.svg";
import { ReactComponent as UA } from "./resources/icons/ua.svg";
import { ReactComponent as UK } from "./resources/icons/en.svg";
import { ReactComponent as RU } from "./resources/icons/ru.svg";

export const navLinks = [
  "home_link",
  "about_link",
  "approach_link",
  "services_link",
  "contact_link",
]

export const languages = [
  {
    lang: 'en',
    Icon: UK
  },
  {
    lang: 'md',
    Icon: MD
  },
  {
    lang: 'ua',
    Icon: UA
  },
  {
    lang: 'ru',
    Icon: RU
  },
]

export const aboutCards = [
  {
    label: "quality_standarts",
    icon: <Anchor className="card__icon"/>,
    link: {
      label: "about_quality_standarts_link",
      href: "https://drive.google.com/file/d/1o-q1N9fFHo9Q53X9Yb8ogfiSpN_5emwj/view?usp=sharing"
    }
  },
  {
    label: "relationships",
    icon: <Pen className="card__icon"/>
  },
  {
    label: "clients_needs",
    icon: <PlayingCard className="card__icon"/>
  },
]

export const clientCards = [
  {
    label: 'companies',
    icon: <Bulb />
  },
  {
    label: 'contract',
    icon: <Note />
  },
  {
    label: 'private-label',
    icon: <Ruler />
  },
  {
    label: 'organizations',
    icon: <Server />
  }
]

export const servicesCards = [
  {
    label: 'specialty',
    icon: <Monitor />
  },
  {
    label: 'formulation',
    icon: <Picture />
  },
  {
    label: 'chemical',
    icon: <Headphones />
  },
]



export const useMediaQuery = (query) => {
  const getMatches = (query)  => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState(getMatches(query))

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    handleChange()

    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}