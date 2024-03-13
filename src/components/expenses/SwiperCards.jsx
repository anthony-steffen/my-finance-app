import {
  IoIosArrowBack,
  IoIosArrowForward,
} from 'react-icons/io';

import { useContext, useEffect, useState } from 'react';
import AppContext from '../../contexts/AppContext';

import '../../styles/components/SwiperCards.css';
import '../../styles/components/Lists.css';
import Avatar from '../../assets/pb01.png';

function SwiperCards() {
  const { expenses, categoryIcons, categories, theme } = useContext(AppContext);

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

  // Renderiza um card por padrão caso não exista nenhuma despesa
  if (expenses.length === 0) {
    return (
      <div className="card text-center bg-light mt-1 col-xl-7 mx-auto">
        <div
          className="img-container"
        >
          <img
            src={ Avatar }
            className="col-12 col-md-6 col-xl-3 mx-auto d-block mb-1 rounded-2"
            alt="..."
          />
        </div>
        <div className={ `card-body bg-${theme} py-2 px-2 mb-1 rounded-3` }>
          <h5
            className={
              `card-title text-center text-${theme === 'light' ? 'dark' : 'light'}`
            }
          >
            Gastos por categoria.
          </h5>
          <p
            className={
              `card-text text-center text-${theme === 'light' ? 'dark' : 'light'}`
            }
          >
            Cadastre suas despesas e nós mostraremos
            seus gastos por categoria nesta seção.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      id="carouselExampleFade"
      className={ `
      bg-${theme === 'light' ? 'light' : 'dark'}
      carousel slide carousel-fade py-2 mt-1 col-xl-7 mx-auto
      ` }
      data-bs-ride="carousel"
      data-bs-interval={ 7000 }
      data-bs-pause="hover"
      style={ { border: 'none' } }
    >
      <h5
        className={ `
        text-danger text-center mb-2 gap-2 fw-bold
        ` }
        style={ {
          width: '90%',
          margin: 'auto',
          textDecoration: 'underline',
          textUnderlineOffset: '0.5rem',
          textShadow: '1px 0px 0px black',
        } }
      >
        Gastos por Categoria
      </h5>
      <div className="carousel-indicators mb-1">
        <button
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide-to="0"
          className={ `active ${theme === 'light' ? 'bg-dark' : 'bg-white'}` }
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className={ theme === 'light' ? 'bg-dark' : 'bg-white' }
        />
        <button
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className={ theme === 'light' ? 'bg-dark' : 'bg-white' }
        />
      </div>

      <div className="carousel-inner">
        {expensesGroup.map((group, index) => (
          <div
            key={ index }
            className={ `carousel-item ${index === 0 ? 'active' : ''}` }
          >
            {group.map((element, elementIndex) => (
              <div className="category-card" key={ elementIndex }>
                <div
                  className="category-card-body bg-white"
                  style={ {
                    boxShadow: '0px 1px 2px 2px black',
                    borderRadius: '10px',
                    width: '13vh',
                    height: '13vh',
                  } }
                >
                  <div
                    className="category-card-title"

                  >
                    {element.category}
                  </div>
                  <div
                    className="category-card-icon"
                    style={ {
                      color: categories
                        .find((item) => item.name === element.category).color,
                    } }
                  >
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
