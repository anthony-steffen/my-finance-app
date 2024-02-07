import {
  IoIosArrowBack,
  IoIosArrowForward,
} from 'react-icons/io';

import { useContext, useEffect, useState } from 'react';
import HomeContext from '../../contexts/HomeContext';
import ExpenseContext from '../../contexts/ExpenseContext';

import '../../styles/components/SwiperCards.css';
import Avatar from '../../assets/wide01.png';

function SwiperCards() {
  const { expenses } = useContext(ExpenseContext);
  const { categoryIcons } = useContext(HomeContext);
  const { categories } = useContext(HomeContext);
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
      <div className="card mb-3">
        <div
          className="img-container"
        >

          <img
            src={ Avatar }
            className="card-img-top"
            alt="..."
            style={ { width: '100%', height: '30vh', objectFit: 'cover' } }
          />
        </div>

        <div className="card-body">
          <h5 className="card-title text-center">Gastos por categoria</h5>
          <p className="card-text text-center">
            Você ainda não possui nenhuma despesa cadastrada.
            <br />
            Cadastre suas despesas e acompanhe aqui seus gastos por categoria.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade py-3 w-100 bg-dark"
      // data-bs-ride="carousel"
      // data-bs-interval={ 7000 }
      // data-bs-pause="hover"
    >
      <h5 className="carousel-title text-white text-center mb-3">
        Gastos por Categoria
      </h5>
      <div className="carousel-indicators mb-0">
        <button
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide-to="0"
          className="active bg-white"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className="bg-white"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className="bg-white"
        />
      </div>

      <div className="carousel-inner">
        {expensesGroup.map((group, index) => (
          <div
            key={ index }
            className={ `carousel-item ${index === 0 ? 'active' : ''} gap-1` }
          >
            {group.map((element, elementIndex) => (
              <div className="category-card border border-1" key={ elementIndex }>
                <div className="category-card-body">
                  <div className="category-card-title mb-0">{element.category}</div>
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
