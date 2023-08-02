# README

## Практическое занятие №26

### Тема:

Репозитарий содержит материалы по практическому занятию №26, посвященному работе с пропсами, и стилизации React.js.

### Цели занятия
- закрепление знаний, полученных на лекции;
- разбор практических примеров;
- практическое применение полученных знаний.

### Задачи занятия
1. Вспоминаем пропсы. Добавляем в компонент `Button` проп `isDisabled`. В зависимости от него, кнопка должна быть enabled/disabled. В кнопку "Корзина", передаем проп `isDisabled = true`
2. Создаем компонент `ButtonsBlock`. Он должен нам возвращать блок из 4 кнопок (Вход, Регистрация, Профиль, Корзина).
3. Работаем с более сложными пропсами. Наша задача - передать в компонент `ButtonsBlock` объект с данными нашего пользователя `{name: 'Vasilij', status: 'active'}`. В компоненте, нужно:
  - если статус пользователя = `active` - то показываем кнопки "Профиль", "Корзина".
  - если нет - показыаем кнопки "Вход", "Регистрация", "Корзина".
4. Еще немного сложных пропсов. Нам нужно, чтобы наш компонент `Button` принимал проп `clickHandler` - то есть, ссылку на функцию, которая будет вызываться при клике на кнопку. В качестве обработчика, пока что передаем такую функцию: `() => { console.log('click!') }`
5. Работаем со стилизацией. Вначале, нам нужно создать файл со стилями, которые будут общими для всего приложения. Нужно создать файл `App.css` в папке `/src`. Там, нужно задать `font-family: Roboto;`, то есть сделать наши шрифты чуть интереснее. Также, здесь можно выполнить сброс стилей.
6. Работаем с инлайн-стилями. Нам нужно для кнопки "Корзина", сделать следуюшее:
  - цвет фона - `green`
  - цвет текста - `white`
  - внутренние отступы - 10px
  - border-radius: 10px.
7. Теперь стилизуем все наши кнопки - создадим общие для них стили. В этом нам помогут CSS-модули. Нужно создать в папке `/components` подпапку `button`, переместить в нее компонент `Button.jsx`, и в этой же папке создать файл `Button.module.css`. В этом CSS-файле, нам нужно определить CSS-классы, которые будут применяться ко всем кнопкам.
  - .button - класс кнопки. Должна иметь 10 пикселей радиус углов, 10 пикселей внутренний отступ, цвет фона - `#0096CD`, цвет текста - белый. Курсор - pointer.
  - при наведении на кнопку, нужно сделать чтобы она меняла цвет фона на `lightblue`. Переход должен быть плавным.

Теперь нам осталось применить эти классы. Нам нужно:
  - импортировать файл со стилями в компоненте `Button.jsx`
  - применить класс `button` к кнопке (через `className`)
8. Добавляем в файл стилей класс для "запрещенной" кнопки - .button-disabled. Она должна иметь серый цвет фона, и обычный курсор. Нужно применять этот класс только в случае, если у кнопки проп `disabled = true`.

### Полезные ссылки по занятию:
 - Описание [create-react-app](https://create-react-app.dev/).
 - [Стилизация в React](https://www.w3schools.com/react/react_css_styling.asp). Увы, англоязычная - но исчерпывающе поясняет существующие основные подходы к стилизации компонентов.
 - [Пропсы](https://www.w3schools.com/react/react_props.asp) - тоже англоязычные, но заслуживают внимания.
 - Старая [документация](https://legacy.reactjs.org/docs/components-and-props.html) React. Хоть и помечена как устаревшая, но еще вполне актуальная. Можно просмотреть по диагонали.