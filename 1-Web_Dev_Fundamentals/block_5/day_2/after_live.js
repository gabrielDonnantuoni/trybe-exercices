// Parte 1
let h1 = document.createElement('h1');
document.querySelector('body').appendChild(h1);

let mainContent = document.createElement('div');
mainContent.className = 'main-content';
document.querySelector('body').appendChild(mainContent);

let centerContent = document.createElement('div');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);

let pCenterContent = document.createElement('p');
pCenterContent.innerText = 'Texto do pCenterContent';
centerContent.appendChild(pCenterContent);

let leftContent = document.createElement('div');
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);

let rightContent = document.createElement('div');
rightContent.className = 'right-content';
mainContent.appendChild(rightContent);

let imgLeftContent = document.createElement('img');
imgLeftContent.src = 'https://picsum.photos/200';
imgLeftContent.className = 'small-image';
leftContent.appendChild(imgLeftContent);

let ulRightContent = document.createElement('ul');
rightContent.appendChild(ulRightContent);

let listItems = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez']

for (let i = 0; i < listItems.length; i += 1) {
    let item = document.createElement('li');
    item.innerText = listItems[i];

    ulRightContent.appendChild(item);
}

for (let i = 1; i <= 3; i += 1) {
    mainContent.appendChild(document.createElement('h3'));
}

// Parte 2
h1.classList.add('title');

document.querySelectorAll('h3').forEach((item) => {
    item.classList.add('description');
})

mainContent.removeChild(leftContent);

rightContent.style.marginRight = 'auto';

centerContent.style.backgroundColor = 'green';

for (let i = ulRightContent.children.length - 1; i >= 0; i -= 1) {
    let item = ulRightContent.children[i];
    let itemText = ulRightContent.children[i].innerText.toLowerCase();
    console.log(itemText);
    if (itemText === 'nove' || itemText === 'dez') {
        item.remove();
    }
}