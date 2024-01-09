// import { Carousel } from 'react-bootstrap';

import {
  IoIosRestaurant,
  IoIosCar,
  IoIosMan,
  IoIosArrowBack,
  IoIosArrowForward,
} from 'react-icons/io';
import { GiHouse, GiShoppingBag, GiCoins } from 'react-icons/gi';
import { FcVoicePresentation } from 'react-icons/fc';
import { BsCashCoin } from 'react-icons/bs';
import { CiCoinInsert } from 'react-icons/ci';

import '../styles/components/SwiperCards.css';

function SwiperCards() {
  const firstCard = [
    {
      id: 'Restaurante',
      name: 'Restaurante',
      value: `R$ ${0}`,
      icon: <IoIosRestaurant />,
    },
    { id: 'Habitação', name: 'Habitação', value: `R$ ${0}`, icon: <GiHouse /> },
    { id: 'Compras', name: 'Compras', value: `R$ ${0}`, icon: <GiShoppingBag /> },
  ];
  const secondCard = [
    { id: 'Transporte', name: 'Transporte', value: `R$ ${0}`, icon: <IoIosCar /> },
    { id: 'Lazer', name: 'Lazer', value: `R$ ${0}`, icon: <IoIosMan /> },
    {
      id: 'comunicação',
      name: 'Comunicação',
      value: `R$ ${0}`,
      icon: <FcVoicePresentation />,
    },
  ];
  const thirdCard = [
    {
      id: 'Despensas Financeiras',
      name: 'Despensas Financeiras',
      value: `R$ ${30000}`,
      icon: <BsCashCoin />,
    },
    {
      id: 'Investmentos',
      name: 'Investmentos',
      value: `R$ ${0}`,
      icon: <CiCoinInsert /> },
    { id: 'Renda', name: 'Renda', value: `R$ ${0}`, icon: <GiCoins /> },
    // {id:"Outros", name: "Others",icon: <BsQuestion />}
  ];

  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-touch
    >
      <h5
        className="title text-dark text-center mb-4 mt-4"
      >
        Gastos por Categorias
      </h5>
      <div className="carousel-inner">
        <div className="carousel-item active">
          {firstCard.map((card) => (
            <div className="categori-card" key={ card.name }>
              <div className="categori-card-body">
                <div className="categori-card-title  mb-0">{card.name}</div>
                <div className="categori-card-icon">{card.icon}</div>
                <div className="categori-card-value">
                  <span className="text-dark">{card.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-item">
          {secondCard.map((card) => (
            <div className="categori-card" key={ card.name }>
              <div className="categori-card-body">
                <div className="categori-card-title  mb-0">{card.name}</div>
                <div className="categori-card-icon">{card.icon}</div>
                <div className="categori-card-value">
                  <span className="text-dark">{card.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-item">
          {thirdCard.map((card) => (
            <div className="categori-card" key={ card.name }>
              <div className="categori-card-body">
                <div className="categori-card-title  mb-0">{card.name}</div>
                <div className="categori-card-icon">{card.icon}</div>
                <div className="categori-card-value">
                  <span className="text-dark">{card.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="control-prev-icon text-primary fs-1">
          <IoIosArrowBack />
        </span>
        <span className="visually-hidden text-dark">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="control-next-icon text-primary fs-1 ">
          <IoIosArrowForward />
        </span>
        <span className="visually-hidden text-dark">Next</span>
      </button>
    </div>

  );
}

export default SwiperCards;
