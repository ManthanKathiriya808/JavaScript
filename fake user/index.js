
let search = document.getElementById("search")
let tbody =document.querySelector("#tbody")
// let l_sort =document.querySelector("#l-sort")
// let h_sort =document.querySelector("#h-sort")


function l_sort(){
    let lowSorted = users.sort((a,b) => a.name.first - b.name.first)
    showData(lowSorted)
    console.log(lowSorted)
}
function h_sort(){
    let highSorted = users.sort((a,b) => b.name.first - a.name.first)
    showData(highSorted)
    console.log(highSorted)
}
search.addEventListener("keyup",function(e){

   let val = e.target.value.toUpperCase()

   let searchData = users.filter((ele) => !ele.name.first.toUpperCase().indexOf(val) || !ele.email.toUpperCase().indexOf(val))


   showData(searchData)
})


function offcanvas(id){
    let offcanvasData = users.filter((ele) => ele.id.value == id)

    offshow(offcanvasData) 
}

  let offcanvas_body =document.querySelector("#offcanvas-body")

  
function offshow(ofcanvasData){
  
    
    offcanvas_body.innerHTML=""

    ofcanvasData.map((ele) => {


        offcanvas_body.innerHTML = `
        <div class="card p-2" style="width: 18rem;">
  <img src="${ele.picture.large}" class="card-img-top rounded-circle" alt="...">
  <div class="card-body">
    <h5 class="card-title">${ele.name.first} ${ele.name.last}</h5>
    <p class="card-text">Gender : ${ele.gender}</p>
    <p class="card-text">Email : ${ele.email}</p>
    <p class="card-text">Phone : ${ele.phone}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
     
  </div>
</div>
    `
    })

}


function showData(subdata){
    tbody.innerHTML =""
    subdata.map((ele) =>{

        tbody.innerHTML += `
        
<tr class="">
        <td><img src =" ${ele.picture.large}" ></td>
        <td>${ele.name.first}</td>
        <td>${ele.email}</td>
        <td>${ele.location.city}</td>
      <td>  <button onclick="offcanvas('${ele.id.value}')" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" >More </button></td>
    </tr>
        `
    
    })
}

    users.map((ele) =>{

    tbody.innerHTML += `
    
    <tr class="">
        <td><img src =" ${ele.picture.large}" ></td>
        <td>${ele.name.first}</td>
        <td>${ele.email}</td>
        <td>${ele.location.city}</td>
      <td>  <button onclick="offcanvas('${ele.id.value}')" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" >More </button></td>
    </tr>
    `

})