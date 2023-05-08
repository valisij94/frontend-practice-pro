/***********************************************************/
/** Пример замыкания **/
const PI = 3.14159;
function getCircleLength(radius) {
    return 2 * PI * radius;
}

/**********************************************************/
/** Пример работы с DOM **/
const button = document.querySelector('.button');
let count = 0;
const greeting = `You pressed ${count} times!`;
button.addEventListener('click', (event) => {
    count++;
    console.log(greeting);
});
/**********************************************************/

/**********************************************************/

for (let i = 0; i < 10; i++) {
    console.log('Iteration ' + i);
}
// Раскомментируйте
//console.log('Now our iterator is: ' + i);

// Здесь что-то не работает. Почему?
// Как сделать так, чтобы работало?
// Что будет, если вместо let мы используем var?

  /**********************************************************/
function outerFunction(text) {
    const outerProperty = 'Outer Property';
    // 1
    function innerFunction() {
      // 2
        const innerProperty = 'Inner';
        console.log(`${innerProperty} ${text}`)
    }
    // 3
    innerFunction();
    // 4
}
// 5
outerFunction('TextArgument');
// Что выведет код?
// Что будет, если на месте метки 1 вызвать innerFunction?
// Что будет, если в точке 2 поставить console.log(outerProperty)?
// Что будет, если в точке 3 поставить console.log(outerProperty)?
// Что будет, если в точке 4 поставить console.log(innerProperty)?
// Что будет, если в точке 5 поставить console.log(innerProperty)?
// Что будет, если в точке 5 поставить console.log(outerProperty)?

/**********************************************************/

/************* Блок работы с DOM ********************/
/*
const button = document.querySelector('.button');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');
const input = document.querySelector('.input');

button.addEventListener('click', () => {
    let text = input.value;
    let textContainer = document.querySelector('.modal-content-text');
    textContainer.innerText = text;
    modal.style.display = 'block';
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
*/
