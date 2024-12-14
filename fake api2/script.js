let product = document.querySelector("#products")




function audio(){
    let subproduct = prod.filter((ele) => ele.category =="audio")
    showDown(subproduct)

}

function gaming(){
    let subproduct =prod.filter((ele) => ele.category == "gaming")
    showDown(subproduct)
}
function mobile(){
    let subproduct =prod.filter((ele) => ele.category == "mobile")
    showDown(subproduct)
}
function tv(){
    let subproduct =prod.filter((ele) => ele.category == "tv")
    showDown(subproduct)
}
function lprice(){
    let subproduct = prod.sort((a,b) => a.price- b.price)
    showDown(subproduct)
}
function hprice(){
    let subproduct =prod.sort((a,b) => b.price -a.price)
    showDown(subproduct)
}


function showDown(subproduct){

    product.innerHTML =""
    subproduct.map((ele) => {

        let col = document.createElement("div")
        col.setAttribute("class", "col  border p-4")
        let box =document.createElement("div")
        box.setAttribute("class","box d-flex   flex-column justify-content-evenly ")
        let img = document.createElement("img")
        img.setAttribute("class","img-thumbnail")
        let title =document.createElement("h5")
        let brand = document.createElement("p")
        brand.setAttribute("class","p")
        let price =document.createElement("h5")
        price.setAttribute("class","text-danger")
        let button =document.createElement("button")
        button.setAttribute("class","btn btn-primary  my-4")
        button.innerHTML ="Buy Now"
        img.src = ele.image
        title.textContent = ele.title
        brand.textContent=ele.brand
        price.textContent =`Rs. ${ele.price}`
        box.append(img,title,brand,price ,button)
        col.append(box)
        product.append(col)
    
    })
}

prod.map((ele) => {

    let col = document.createElement("div")
    col.setAttribute("class", "col  border p-4")
    let box =document.createElement("div")
    box.setAttribute("class","box d-flex   flex-column justify-content-evenly ")
    let img = document.createElement("img")
    img.setAttribute("class","img-thumbnail")
    let title =document.createElement("h5")
    let brand = document.createElement("p")
    brand.setAttribute("class","p")
    let price =document.createElement("h5")
    price.setAttribute("class","text-danger")
    let button =document.createElement("button")
    button.setAttribute("class","btn btn-primary  my-4")
    button.innerHTML ="Buy Now"
    img.src = ele.image
    title.textContent = ele.title
    brand.textContent=ele.brand
    price.textContent =`Rs. ${ele.price}`
    box.append(img,title,brand,price ,button)
    col.append(box)
    product.append(col)

})


