let data = [
    {
        id:1,
        pic:"https://randomuser.me/api/portraits/men/22.jpg",
        name:"john doe",
        age:24,
        email:"john@gmail.com"
    },
    {
        id:2,
        pic:"https://randomuser.me/api/portraits/men/22.jpg",
        name:"johnny doe",
        age:54,
        email:"dfg@gmail.com"
    },
]

document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    let pic1 =document.querySelector("#pic").value
    let name1 =document.querySelector("#name").value
    let email1 =document.querySelector("#email").value
    let age1 =document.querySelector("#age").value
    let num = Math.random()
    let obj ={
        id:Math.round(num*1000),
        pic:pic1,
        name:name1,
        age:age1,
        email:email1
    }

    data.push(obj)
    showData(data)
    document.querySelector("#pic").value=""
    document.querySelector("#name").value=""
    document.querySelector("#email").value=""
    document.querySelector("#age").value=""

})


function dele(id){
    let delData =data.filter((ele) => ele.id != id)

    showData(delData)
}

function showData(delData){
    tbody.innerHTML ="";
    delData.map((ele) => {

        tbody.innerHTML += `
        <tr class="">
            <td><img src ="${ele.pic}"/></td>
            <td>${ele.name}</td>
            <td>${ele.age}</td>
            <td>${ele.email}</td>
            <td><button class=" btn btn-warning">Update</button></td>
            <td><button class=" btn btn-danger" onclick="dele(${ele.id})">Delete</button></td>
            </tr
        `
    })
}

let tbody =document.querySelector("#tbody")

data.map((ele) => {

    tbody.innerHTML += `
    <tr class="">
        <td><img src ="${ele.pic}"/></td>
        <td>${ele.name}</td>
        <td>${ele.age}</td>
        <td>${ele.email}</td>
        <td><button class=" btn btn-warning">Update</button></td>
        <td><button class=" btn btn-danger" onclick="dele(${ele.id})">Delete</button></td>
        </tr
    `
})

