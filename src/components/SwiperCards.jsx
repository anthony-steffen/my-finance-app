import Slider from "react-slick/lib/slider.js";

import { IoIosRestaurant, IoIosCar, IoIosMan } from "react-icons/io"
import { GiHouse, GiShoppingBag, GiCoins  } from "react-icons/gi"
import { FcVoicePresentation } from "react-icons/fc"
import { BsCashCoin, BsQuestion } from "react-icons/bs";
import { CiCoinInsert } from "react-icons/ci";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/components/SwiperCards.css'

function SwiperCards() {
  
  const settings = {
    slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
  };

  const FirstCard = [
    {id:"Restaurante", name: "Restaurante",icon: <IoIosRestaurant />},
    {id:"Habitação", name: "Habitação",icon: <GiHouse />},
    {id:"Compras", name: "Compras",icon: <GiShoppingBag />},
  ]
  const SecondCard = [
    {id:"Transporte", name: "Transporte",icon: <IoIosCar />},
    {id:"Lazer", name: "Lazer",icon: <IoIosMan />},
    {id:"comunicação", name: "Comunicação",icon: <FcVoicePresentation />},
  ]
  const ThirdCard = [
    {id:"Despensas Financeiras", name: "Despensas Financeiras",icon: <BsCashCoin />},
    {id:"Investmentos", name: "Investmentos",icon: <CiCoinInsert />},
    {id:"Renda", name: "Renda",icon: <GiCoins />},
    // {id:"Outros", name: "Others",icon: <BsQuestion />}
  ]
  
  return (
    <div className="container">
       {/* <div>SwiperCards</div> */}
        <h4 className="text-center  mt-3"> Gastos por categoria</h4>
        <Slider {...settings}>
        <div className="card-content d-flex p-0">
           {FirstCard.map((icon) => (
             <div className="card-item" key={icon.id}>
               <div className="card-title">
                 {icon.name}
               </div>
               <div className="card-icon">
                 {icon.icon}
               </div>
               <div className="card-value">
                  <span>R${"0"}</span>
                </div>
             </div>
           ))}
        </div>

        <div className="card-content d-flex p-0">
            {SecondCard.map((icon) => (
              <div className="card-item" key={icon.id}>
              <div className="card-title">
                {icon.name}
              </div>
              <div className="card-icon">
                {icon.icon}
              </div>
              <div className="card-value">
                 <span>R${"0"}</span>
               </div>
            </div>
          ))}
       </div>

        <div className="card-content d-flex p-0">
            {ThirdCard.map((icon) => (
              <div className="card-item" key={icon.id}>
              <div className="card-title">
                {icon.name}
              </div>
              <div className="card-icon">
                {icon.icon}
              </div>
              <div className="card-value">
                 <span>R${"0"}</span>
               </div>
            </div>
          ))}
       </div>
        
        </Slider>
    </div>
  );
}

export default SwiperCards