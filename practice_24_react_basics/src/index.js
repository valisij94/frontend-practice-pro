import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

function App() {
  return (
    <div className="App">
      <ProductCard />
    </div>
  );
}

/** Создать компонент ProductCard
 * контейнер карточки - div
 * он содердит заголовок h2, с текстом "Товар"
 * также параграф p с описанием товара (Описание нашего товара)
 * параграф с ценой товара. Цену ставим 100 у.е.
 * Кнопка "Добавить в корзину"
 */

/**
 * Задание 2
 * Вывести под кнопкой button параграф с текущей датой.
 * Текущую дату определяем как new Date()
 */
function ProductCard() {
  const rand = Math.random();
  let myVar = rand < 0.5 ? 'LESS' : 'MORE';
  // Если значение переменной rand меньше 0.5 то в myVar пишем LESS, иначе - пишем MORE
  // вывести значение переменной myVar в параграфе, вместо даты
  // Задание 3
  // Вывести в наш параграф строку следующего вида:
  // Value: _RAND_, text: _myVar_

  let myParagraph = null;
  if (rand < 0.5) {
    myParagraph = (<p>MyPar</p>);
  }
  return (
    <div>
      <h2>Product</h2>
      <p>Product Description</p>
      <p>Product price: 100 units</p>
      <ButtonsPanel
        addText="Add To Cart"
        dropText="Remove from Cart"
        rand={rand}
      />
      {
        (rand < 0.5) ? <p>{`Value: ${rand}, text: ${myVar}`}</p> : null
      }

      <ButtonsPanel
        addText="Button1"
        dropText="Button2"
        rand='0.4'
      />
    </div>
  );
}
/** Задание 4
 * Создать компонент ButtonsPanel
 * В нем должны быть 2 кнопки: Add to Cart, Remove from Cart
 * Этот компонент отрендерить в компоненте ProductCard, вместо <button>
 */

// предположим, мы передаем в компонент тексты для кнопок

/**
 * Задание 5. Компонент buttonsPanel теперь ожидает в пропсах rand.
 * Если rand < 0.5 то рендерим кнопку drop, иначе - не рендерим
 */
const ButtonsPanel = (props) => {
  return (
    <div>
      <button>{props.addText}</button>
      {
        props.rand < 0.5 ? <button>{props.dropText}</button> : null
      }
    </div>
  );
};