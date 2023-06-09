# README

## Практическое занятие №8

### Тема: Методы массивов с колбэком (продолжение)

Репозитарий содержит материалы по практическому занятию №8 - методам массивов с колбэком.

### Цели занятия
- закрепление знаний, полученных на лекции;
- решение задач.

### Задачи занятия
В процессе занятия, предполагается решение задач на работу с методами массивов с колбэками.

### Список задач на занятие, и для самостоятельного выполнения
1. Метод sort.
 - отсортировать массив строк sameCaseStringsArray в алфавитном порядке;
 - отсортировать массив строк differentCaseStringsArray в алфавитном порядке без учета регистра;
 - отсортировать массив чисел по возрастанию;
 - отсортировать массив строк по убыванию кол-ва символов в строке;
 - отсортировать массив объектов (товары) по возрастанию цены;
 - отсортировать массив объектов (товары) по категории (в алфавитном порядке), и по возрастанию цены. Т.е упорядочить по категориям, и в разрезе категорий - по возрастанию цены.

2. Метод reduce
 - найти сумму элементов массива чисел, с использованием метода reduce
 - найти суммарную длину всех строк в массиве
 - из массива строк получить объект, в котором ключами будут строки из массива, а значениями - длины этих строк. Пример:
 ```
 // Исходный массив
 let arr = ["This", "is", "an", "array", "of", "strings"];
 // Ожидаемый результат
 {
  this: 4,
  is: 2,
  an: 2,
  array: 5,
  of: 2,
  strings: 7
 }
 ```
 Подсказка: чтобы присвоить объекту свойство, название которого нужно вычислять, используем конструкцию `obj[expression]`, где `obj` - это объект, куда мы хотим присвоить свойство, а `expression` - это вычисляемое нечто (например, переменная).
 - с помощью метода reduce, получить массив с названиями товаров
 - с помощью метода reduce, получить из массива товаров объект, в котором ключами будут наименования товаров, а значениями - цены этих товаров. То есть, результат будет такого вида:
 ```
 {
  Ball: 100,
  Gloves: 140,
  ...
 }
 ```
 - с помощью метода reduce, на основе списка товаров получить объект, в котором ключами будут категории, а значениями - количество товаров в этой категории. Ожидаемый результат для массива products:
 ```
 {
  Sport: 3,
  Tools: 2,
  HomeStuff: 1
 }
 ```
Подсказки к задаче:
 * при рассмотрении объекта товара в функции колбэке reduce, нужно проверить, есть ли в объекте-"аккумуляторе" категория этого товара. Это можно сделать с помощью условия вида `if (acc[product.category])` - такая конструкция возвращает или значение (если такое свойство в объекте есть), или undefined (если такого свойства в объекте нет).
 * если свойство в объекте есть - нужно увеличить его значение на 1 (то есть увеличить кол-во товаров этой категории).
 * если свойства в объекте нет - то нужно его добавить в объект-"аккумулятор", а его значение - присвоить 1 (то есть первый товар этой категории).

3. Метод some
 - проверить, есть ли в массиве чисел числа, кратные 3
 - проверить, есть ли в массиве строк такие строки, длина которых - 4 символа
 - проверить, есть ли в массиве товаров такие товары, у которых цена меньше 100.


### Полезные ссылки
- [Русскоязычный гайд](https://learn.javascript.ru/array-methods) по методам массивов (смотреть те методы, которые рассмотрены на занятиях).
- [Для гурманов](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array) спецификация MDN, местами русскоязычная.
- [Интерактивный пример reduce](https://doka.guide/js/array-reduce/) - на более глубокое понимание метода reduce.