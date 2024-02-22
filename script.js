const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')


function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style:'currency',
        currency: 'BRL',
    })
    return newValue

}


function showAll(productArray) {
    
    let myLi = ''
    
    productArray.forEach((product) => {
    myLi += `
         <li>
             <img src=${product.src}>
             <p>${product.name}</p>
             <p classe="item-price"> ${formatCurrency(product.price)}</p>
         </li>
         `
  })
  list.innerHTML = myLi
}


function mapAllItem() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
        
        
    }))

    showAll(newPrices)
}

function sumAllItems() {
    const totalValue = menuOptions.reduce( (acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
    <li>
        <p>O valor total dos itens é  ${formatCurrency(totalValue)}<p>
    </li>
    `

}

function filterAllItems() {
const filterJusterVegan = menuOptions.filter( (product) => product.vegan)

showAll(filterJusterVegan)


}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItem)
buttonSumAll.addEventListener('click', sumAllItems)
buttonFilterAll.addEventListener('click', filterAllItems)
