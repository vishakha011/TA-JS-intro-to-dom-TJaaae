let container = document.querySelector('.container');

bookly.books.forEach(char => {
    let article = document.createElement('article');
    let img = document.createElement('img');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let button = document.createElement('a');

    article.classList.add('card');
    img.classList.add('img');
    h2.classList.add('title');
    p.classList.add('author');
    button.classList.add('button');


    img.src = char.image;
    h2.innerText = char.title;
    p.innerText = `Author: ${char.author}`;
    button.innerText = 'Buy Now';

    article.append(img, h2, p, button);
    container.append(article);
})