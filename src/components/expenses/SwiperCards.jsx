import {
  IoIosArrowBack,
  IoIosArrowForward,
} from 'react-icons/io';

import '../../styles/components/SwiperCards.css';

import { useContext, useEffect, useState } from 'react';
import HomeContext from '../../contexts/HomeContext';
import ExpenseContext from '../../contexts/ExpenseContext';

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

  // const findColors = (color) => {
  //   const category = categories.find((item) => item.name === color);
  //   console.log(category);
  //   // 'return category.color;'
  // };
  // Renderiza um card padrão caso não exista nenhuma despesa
  // if (expenses.length === 0) {
  //   return (
  //     <div className="card-group">
  //       <div className="card">

  //         <div className="card-body">
  //           <h5 className="card-title">Card title</h5>
  //           <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  //         </div>
  //         <div className="card-footer">
  //           <small className="text-muted">Last updated 3 mins ago</small>
  //         </div>
  //       </div>

  //     </div>
  //   );
  // }

  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade py-3 w-100"
      // data-bs-ride="carousel"
      // data-bs-interval={ 7000 }
      // data-bs-pause="hover"
    >
      <h5 className="carousel-title text-dark text-center mb-3">
        Gastos por Categoria
      </h5>
      <div className="carousel-indicators mb-0">
        <button
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide-to="0"
          className="active bg-dark"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className="bg-dark"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className="bg-dark"
        />
      </div>

      <div className="carousel-inner">
        {expensesGroup.map((group, index) => (
          <div
            key={ index }
            className={ `carousel-item ${index === 0 ? 'active' : ''} gap-1` }
          >
            {group.map((element, elementIndex) => (
              <div className="category-card" key={ elementIndex }>
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
