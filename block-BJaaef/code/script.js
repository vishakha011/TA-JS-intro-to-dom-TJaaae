

 let container = document.querySelector('.container');

 got.houses.map(e => e.people.forEach(e => {
    let article = document.createElement('article');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let name = document.createElement('h2');
    let p = document.createElement('p');
    let button = document.createElement('a');

    article.classList.add('box');
    div.classList.add('flex');
    img.classList.add('img');
    p.classList.add('description');
    button.classList.add('button');

    img.src = e.image;
    name.innerText = e.name;
    p.innerText = e.description;
    button.innerText = "Learn More!"


    div.append(img, name);
    article.append(div, p, button);
    container.append(article);

 }));

 