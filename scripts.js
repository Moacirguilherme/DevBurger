const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')


function showAll(productsArray) {
   let myLi = ''

    productsArray.forEach((product) => {
        myLi += `
        <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price">R$ ${product.price}</p>
    </li>
    `
    })
    list.innerHTML = myLi

}


function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({
...product,
price: product.price * 0.9,
    }))
    showAll(newPrices)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)








//git add . && git commit -m "Atualização" && git push