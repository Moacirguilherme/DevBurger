const list = document.querySelector('ul')
let myLi = ''

menuOptions.forEach(produt => {
myLi = myLi + `
    <li>
    <img src=${produt.src}>
    <p>${produt.name}</p>
    <p class="item-price">${produt.price}</p>
</li>
`

})
list.innerHTML = myLi
console.log(myLi)