 
let products = document.querySelector("#products")



function alls(){
  let subdata  = prod.filter((ele) => 
        ele
    )
    // console.log(subdata)
    showData(subdata)
}
function electronic(){
  let subdata  = prod.filter((ele) => 
        ele.category == "electronics"
    )
    // console.log(subdata)
    showData(subdata)
}
function jewelery(){
  let subdata  = prod.filter((ele) => 
        ele.category == "jewelery"
    )
    // console.log(subdata)
    showData(subdata)
}
function mens(){
  let subdata  = prod.filter((ele) => 
        ele.category == "men's clothing"
    )
    // console.log(subdata)
    showData(subdata)
}
function women(){
  let subdata  = prod.filter((ele) => 
        ele.category == "women's clothing"
    )
    // console.log(subdata)
    showData(subdata)
}
function hprice(){
    let subdata = prod.sort((a,b) => a.price- b.price)
    showData(subdata)
}

function lprice(){
    let subdata = prod.sort((a,b) => b.price -a.price)
    showData(subdata)
}
function showData(subdata){

    products.innerHTML = ""
    console.log(subdata)
    subdata.map((ele) => {

        let col = document.createElement("div");
        col.setAttribute("class","col border");
        let img = document.createElement("img")
        img.setAttribute("class","img-thumbnail")
        let title = document.createElement("h5");
        title.setAttribute("class", "")
        let price = document.createElement("h5")
        price.setAttribute("class", "text-danger")
    
    
        img.src=ele.image
        title.textContent = `${ele.title}`
        price.textContent = `$ ${ele.price}`
    
        col.append(img,title,price)
        products.append(col)
    })
    
}

prod.map((ele) => {

    let col = document.createElement("div");
    col.setAttribute("class","col border");
    let img = document.createElement("img")
    img.setAttribute("class","img-thumbnail")
    let title = document.createElement("h5");
    title.setAttribute("class", "")
    let price = document.createElement("h5")
    price.setAttribute("class", "text-danger")


    img.src=ele.image
    title.textContent = `${ele.title}`
    price.textContent = `$ ${ele.price}`

    col.append(img,title,price)
    products.append(col)
})

