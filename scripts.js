const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')


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

function sumAllItens() {
    const totalValue = menuOptions.reduce( (acc , curr)=> acc + curr.price, 0)
    list.innerHTML = `
    <li>
    <p> O Valor total dos itens é R$ ${totalValue} </p>
    </li>
    `

}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
buttonSumAll.addEventListener('click', sumAllItens)








//git add . && git commit -m "Atualização" && git push