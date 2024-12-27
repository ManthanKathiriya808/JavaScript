


let comics = document.getElementById("comics")

data.map((ele) => {

    comics.innerHTML +=`
         <div class="col">
                <div class="card">
                    <img src="${ele.image}" class="card-img-top" alt="${ele.title}">
                    <div class="card-body">
                      <h5 class="card-title">${ele.title}</h5>
                      <p class="card-text">Category : ${ele.category}</p>
                      <p class="card-text">Author : ${ele.author}</p>
                      <h5 class="card-text text-danger">Rs.${ele.price}</h5>
                      <a href="#" class="btn btn-primary w-100 mt-3">Buy Now</a>
                    </div>
                  </div>
            </div>
    
    `
})