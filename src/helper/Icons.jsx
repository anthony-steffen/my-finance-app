// Icons.jsx
import React from 'react';
import {
  IoIosRestaurant,
  IoIosCar,
  IoIosSchool,
  IoIosTrendingDown,
  IoIosTrendingUp,
  IoMdThumbsDown,
} from 'react-icons/io';

import { GiHouse, GiLifeBar } from 'react-icons/gi';
import { FcFilmReel } from 'react-icons/fc';

import { MdSportsMma } from 'react-icons/md';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

const Icons = {
  Moradia: <GiHouse />,
  Alimentação: <IoIosRestaurant />,
  Transporte: <IoIosCar />,
  Educação: <IoIosSchool />,
  Esporte: <MdSportsMma />,
  Saúde: <GiLifeBar />,
  Lazer: <FcFilmReel />,
  Investimentos: <IoIosTrendingUp />,
  Renda: <FaPlusCircle />,
  Despesas: <FaMinusCircle />,
  Imposto: <IoIosTrendingDown />,
  Dívidas: <IoMdThumbsDown />,
};

export default Icons;
