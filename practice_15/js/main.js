const postsContainerEl = document.querySelector('.posts-container');
const commentsContainerEl = document.querySelector('.comments-container');

function renderPost(post) {
    // создаем контейнер карточки, куда потом добавим заголовок и тело поста
    let postCardEl = document.createElement('div');
    // добавляем класс
    postCardEl.classList.add('post-card');
    // элемент для заголовка поста
    let postTitleEl = document.createElement('h3');
    // содержимое элемента заголовка
    postTitleEl.innerText = post.title;
    postTitleEl.classList.add('post-header');
    // элемент для тела поста
    let postBodyEl = document.createElement('p');
    postBodyEl.innerText = post.body;
    postBodyEl.classList.add('post-body');
    // добавляем заголовок и тело в контейнер
    postCardEl.append(postTitleEl, postBodyEl);
    // возвращаем свежесозданный DOM-элемент
    return postCardEl;
}

function renderPosts(postsArray) {
    postsArray.forEach( post => {
        const postEl = renderPost(post);
        postsContainerEl.append(postEl);
    });
}

function requestPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then( res => res.json() )
      .then( function(postsData) {
        renderPosts(postsData);
      });
}

requestPosts();



/** Функция создания нового поста
 * @param title Заголовок поста
 * @param body Тело
 * @param userId ИД пользователя, добавившего пост
 * @return Promise Возвращает промис, который будет зарезолвлен ответом на запрос создания поста
*/
function createPost(title, body, userId) {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
            userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
};

const notificationContainerEl = document.querySelector('.notification-container');

createPost("Title1", "Body1", 1)
  .then( res => res.json())
  .then( jsonResult => {
    notificationContainerEl.innerText = `Пользователь ${jsonResult.userId} успешно создал пост с ID=${jsonResult.id}!`;
    notificationContainerEl.style.display = 'block';
    setTimeout( () => {
        notificationContainerEl.style.display = 'none';
    }, 5000);
  });