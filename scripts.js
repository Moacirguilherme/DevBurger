const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
let myLi = ''

function showAll(){

    menuOptions.forEach(produt => {
    myLi = myLi + `
        <li>
        <img src=${produt.src}>
        <p>${produt.name}</p>
        <p class="item-price">R$ ${produt.price}</p>
    </li>
    `
    })
    list.innerHTML = myLi

}



buttonShowAll.addEventListener('click', showAll)