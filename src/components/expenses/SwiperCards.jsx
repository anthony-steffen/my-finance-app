import {
  IoIosArrowBack,
  IoIosArrowForward,
} from 'react-icons/io';

import { useContext, useEffect, useState } from 'react';
import AppContext from '../../contexts/AppContext';

import '../../styles/components/SwiperCards.css';
import '../../styles/components/Lists.css';

import Avatar from '../../assets/pb02.png';

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
      <div className="mx-auto w-100 mt-2 mb-2" style={ { width: '18rem' } }>
        <div
          className={ `
        col-xl-5 mx-auto card-body p-2 rounded-3
        ${theme === 'light' ? 'bg-white' : 'bg-dark'}
        ` }
        >
          <img
            src={ Avatar }
            className="card-img-top rounded-2"
            alt="..."
            style={ {
              width: '100%',
              height: '15vh',
              // objectFit: 'cover',
            } }
          />
          <h5
            className={ `
          card-text text-center my-1 ${theme === 'light' ? 'text-dark' : 'text-white'}
          ` }
          >
            Gastos por Categoria
          </h5>
          <p
            className={ `
          text-center m-0 ${theme === 'light' ? 'text-dark' : 'text-white'}
          ` }
          >
            Cadastre suas despesas e eu te
            mostrarei seus gastos por categoria nesta seção
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      id="carouselExampleFade"
      className={ `
      bg-${theme === 'light' ? 'light border-dark' : 'dark border-black'}
      carousel slide carousel-fade rounded-1 border-top border-bottom border-5
      ` }
      data-bs-ride="carousel"
      data-bs-interval={ 7000 }
      data-bs-pause="hover"
      style={ { border: 'none' } }
    >
      <h5
        className={ `
        text-danger text-center my-1 gap-2 fw-bold
        ` }
        style={ {
          width: '90%',
          margin: 'auto',
          textDecoration: 'underline',
          textShadow: '1px 0px 0px black',
        } }
      >
        Gastos por Categoria
      </h5>

      <div className="carousel-inner">
        {expensesGroup.map((group, index) => (
          <div
            key={ index }
            className={ `carousel-item ${index === 0 ? 'active' : ''}` }
            style={ { height: '17vh' } }
          >
            {group.map((element, elementIndex) => (
              <div className="category-card" key={ elementIndex }>
                <div
                  className="category-card-body bg-white"
                  style={ {
                    boxShadow: '0px 1px 2px 2px black',
                    borderRadius: '10px',
                    width: '15vh',
                    height: '14vh',
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
        <span className="control-prev-icon text-primary fs-1 mt-3">
          <IoIosArrowBack
            style={ { color: 'red' } }
          />
        </span>
        <span className="visually-hidden text-dark">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="control-next-icon text-primary fs-1 mt-3">
          <IoIosArrowForward
            style={ { color: 'red' } }
          />
        </span>
        <span className="visually-hidden text-dark">Next</span>
      </button>
    </div>
  );
}

export default SwiperCards;
