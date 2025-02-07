// Adjust the quantity of each item through  “+” and “-” buttons:

function handleaddartical(event){
    let product = event.target;
    let parent = product.parentElement
    let countelement = parent.querySelector('span')
    let count = Number(countelement.innerHTML)
    count += 1 
    countelement.innerHTML = count
    // See the total price adjusted according to quantity and deletions:
    let container = parent.parentElement
    let pricetag = container.querySelector('h4')
    let price = Number(pricetag.innerHTML.slice(0,pricetag.innerHTML.length -2))
    let totalPrice = document.querySelector('.total')
    let oldTotal= Number(totalPrice.innerHTML.slice(0,totalPrice.innerHTML.length -2))
    totalPrice.innerHTML = `${oldTotal+price} $`
}

function handledeleteartical(event){
    let allow=false
    let product = event.target;
    let parent = product.parentElement
    let countelement = parent.querySelector('span')
    let count = Number(countelement.innerHTML)
    if (count>0) {
        count -= 1
        allow=true
    } 
    countelement.innerHTML = count
    // See the total price adjusted according to quantity and deletions:
    let container = parent.parentElement
    let pricetag = container.querySelector('h4')
    let price = Number(pricetag.innerHTML.slice(0,pricetag.innerHTML.length -2))
    let totalPrice = document.querySelector('.total')
    let oldTotal= Number(totalPrice.innerHTML.slice(0,totalPrice.innerHTML.length -2))
    if (oldTotal>0 && allow) {
        totalPrice.innerHTML = `${oldTotal-price} $`
    }
}

// Like items through a clickable heart-shaped button that will change color accordingly:

function handleLike(event) {
    let heart = event.target
    if (heart.style.color=='red') {
        heart.style.color='black'
    } else {
        heart.style.color='red'
    }
}

// Delete items from the cart:

function handledelete(event) {
    let trash = event.target
    let containertrash = trash.parentElement.parentElement.parentElement
    containertrash.remove()
    // See the total price adjusted according to quantity and deletions:
    let product = event.target;
    let parent = product.parentElement.parentElement
    let countelement = parent.querySelector('span')
    let count = Number(countelement.innerHTML)
    let container = parent.parentElement
    let pricetag = container.querySelector('h4')
    let price = Number(pricetag.innerHTML.slice(0,pricetag.innerHTML.length -2))
    let totalPrice = document.querySelector('.total')
    let oldTotal= Number(totalPrice.innerHTML.slice(0,totalPrice.innerHTML.length -2))
    totalPrice.innerHTML = `${oldTotal-count*price} $`
}