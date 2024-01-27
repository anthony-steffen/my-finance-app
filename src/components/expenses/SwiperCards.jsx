import {
  IoIosArrowBack,
  IoIosArrowForward,
} from 'react-icons/io';

import '../../styles/components/SwiperCards.css';

import { useContext, useEffect, useState } from 'react';
import HomeContext from '../../contexts/HomeContext';

function SwiperCards() {
  const { expenses, categoryIcons } = useContext(HomeContext);
  const [categoriesData, setCategoriesData] = useState([]);

  // Função para dividir o array de transações em array de 3 elementos
  const splitArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  useEffect(() => {
    const categoriesExpenses = expenses.reduce((acc, expense) => {
      const category = acc.find((item) => item.category === expense.category);
      if (category) {
        category.value += +expense.value;
      } else {
        acc.push({ category: expense.category, value: +expense.value });
      }
      return acc;
    }, []);
    setCategoriesData(categoriesExpenses);
  }, [expenses]);

  // Divide as transações em grupos de três
  const set = 3;
  const expensesGroup = splitArray(categoriesData, set);

  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade bg-dark py-3"
      data-bs-touch
    >
      <h5
        className="carousel-title text-white text-center"
      >
        Gastos por Categoria
      </h5>
      <div className="carousel-inner">
        {expensesGroup.map((group, index) => (
          <div
            key={ index }
            className={ `carousel-item ${index === 0 ? 'active' : ''}` }
          >
            {group.map((element, elementIndex) => (
              <div className="category-card" key={ elementIndex }>
                <div className="category-card-body">
                  <div className="category-card-title mb-0">{element.category}</div>
                  <div className="category-card-icon">
                    {categoryIcons[element.category]}
                  </div>
                  <div className="category-card-value">
                    <span className="text-dark">
                      {element.value.toLocaleString('pt-BR', { style: 'currency',
                        currency: 'BRL' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
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
