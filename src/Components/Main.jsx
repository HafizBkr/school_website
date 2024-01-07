import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../stye/Main.css';
import Footermain from './footermain';
import Micro from '../assets/Micro.svg';

export default function Main() {
  const smallCards = [
    {
      image: require('../assets/patrona.jpg'),
      title: "L’ESGIS, Conseil National du Patronat",
      link: "/News",
      description:
        "L’Ecole Supérieure de Gestion, d’Informatique et des Sciences (ESGIS) et le Conseil National du Patronat Togolais (CNP-Togo) ont renouvelé leur…",
    },
    {
      image: require('../assets/image10.jpg'),
      title: "Miss ESGIS, le Couronnement",
      link: "/News",
      description:
        "Couronnement Élégant : Élection de la Miss École 2023 Une atmosphère de grâce et de glamour a envahi notre école lors de l'événement…",
    },
    {
      image: require('../assets/image1.jpeg'),
      title: "ESGIS, Challenge University",
      link: "/News",
      description:
        "Le Club d'anglais de l’ESGIS « ESGIS English Club » a remporté avec brio la finale du « Challenge University » …",
    },
    {
      image: require('../assets/micro.PNG'),
      title: "ESGIS, Mikrotik academy",
      link: "/News",
      description:
        "ESGIS, Nous persévérons dans le développement de partenariats stratégiques permettant à nos étudiants …",
    },
    {
      image: require('../assets/partenaria-woman.jpg'),
      title: "ESGIS, Mikrotik academy",
      link: "/News",
      description:
        "L'Ecole Supérieure de Gestion, d'Informatique et des Sciences (ESGIS) dans sa politique d'allier la théorie…",
    },
    {
      image: require('../assets/esgis-gab.jpg'),
      title: "ESGIS, Mikrotik academy",
      link: "/News",
      description:
        "première participation, première victoire ! L'équipe d'ESGIS Gabon remporte l'édition 2.0 du concours …",
    },
  ];
  const mainCards = [
    {
      image: require('../assets/patrona.jpg'),
      title: "L’ESGIS, Conseil National du Patronat",
      link: "/News",
      description:
        "L’Ecole Supérieure de Gestion, d’Informatique et des Sciences (ESGIS) et le Conseil National du Patronat Togolais (CNP-Togo) ont renouvelé leur leur convention de partenariat pour répondre aux besoins actuels du marché de l’emploi togolais et pour offrir aux étudiants des formations…",
    },
    {
      image: require('../assets/image10.jpg'),
      title: "Miss ESGIS, le Couronnement",
      link: "/News",
      description:
        "Couronnement Élégant : Élection de la Miss École 2023 Une atmosphère de grâce et de glamour a envahi notre école lors de l'événement  très attendu de l'élection de la Miss École 2023. Cet événement a captivé l'attention de tous, réunissant étudiants,…",
    },
    {
      image: require('../assets/image1.jpeg'),
      title: "ESGIS, Challenge University",
      link: "/News",
      description:
        "Le Club d'anglais de l’ESGIS « ESGIS English Club » a remporté avec brio la finale du « Challenge University » le samedi 02 Avril 2022 à la Salle Concorde du 02 Février. Cette compétition a connu la participation des  …",
    },
    {
      image: require('../assets/micro.PNG'),
      title: "ESGIS, Mikrotik academy",
      link: "/News",
      description:
        "ESGIS, Nous persévérons dans le développement de partenariats stratégiques permettant à nos étudiants d’aisément faire la différence de par la qualité des enseignements reçus et les compétences qu’ils auront acquises. Pour se faire, avec l’accompagnement de 3JME …",
    },
    {
    image: require('../assets/partenaria-woman.jpg'),
      title: "ESGIS, Mikrotik academy",
      link: "/News",
      description:
        "L'Ecole Supérieure de Gestion, d'Informatique et des Sciences (ESGIS) dans sa politique d'allier la théorie à la pratique a signé hier 29 Aout 2023 à son siège à Adidogomé, un partenariat avec Women In Logistics Africa ,Antenne du Togo (WILA -TOGO) pour offrir…",
    },
    {
      image: require('../assets/esgis-gab.jpg'),
      title: "ESGIS, Mikrotik academy",
      link: "/News",
      description:
        "première participation, première victoire ! L'équipe d'ESGIS Gabon remporte l'édition 2.0 du concours Graines de Manager, la plus grande compétition nationale inter-établissements d'entrepreunariat, avec le projet de plateforme numérique d'orientation…",
    },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) =>
        prevIndex === mainCards.length - 1 ? 0 : prevIndex + 1
      );
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentCard = mainCards[currentCardIndex];

  return (
    <div>
      <div className='main'>
        <div className='main-image'>
          <img src={currentCard.image} alt='' className='image' />

          <div className='description'>
            <div className='description-content'>
              <p>{currentCard.description}</p>
            </div>
          </div>

          <div className='txt-container'>
            <div className='txt'>
              <p>PLUS SUR LA COMMUNAUTÉ ESGICIENNE</p>
            </div>
          </div>
        </div>

        <div className='grid-container'>
          {smallCards.map((card, index) => (
            <div key={index} className={`grid-item ${index === currentCardIndex ? 'active' : ''}`}>
              <div className='grid-item-image'>
                <img style={{ width: '100%' }} src={card.image} alt='' />
              </div>
              <div className='grid-item-description'>
                <h4>{card.title}</h4>
                <p>
                  <a href={card.link} className='news-links'>
                    {card.description}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='main-footer'>
          <Footermain />
        </div>
      </div>
      <div className='navbar-underline'></div>
    </div>
  );
}
