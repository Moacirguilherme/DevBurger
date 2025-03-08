const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
let myLi = ''

function showAll(){

    menuOptions.forEach((produt)=> {
    myLi +=  `
        <li>
        <img src=${produt.src}>
        <p>${produt.name}</p>
        <p class="item-price">R$ ${produt.price}</p>
    </li>
    `
    })
    list.innerHTML = myLi

}


function mapAllItens () {
    console.log('chamei')
}


buttonShowAll.addEventListener('click', showAll)
buttonMapAll.addEventListener('click', mapAllItens)