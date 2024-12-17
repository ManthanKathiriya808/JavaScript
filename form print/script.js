let data =[
    {
        id:1,
        pic:"https://randomuser.me/api/portraits/men/22.jpg",
        name:"ruther ford",
        email:"man@123",
        age:23
    },
    {
        id:2,
        pic:"https://randomuser.me/api/portraits/men/22.jpg",
        name:"adgf forsafdd",
        email:"fdf@123",
        age:27
    }
]


document.querySelector("#form").addEventListener("submit",function(e){
    e.preventDefault();


    let pic1 = document.getElementById("img").value

    let name1 = document.getElementById("name").value

    let email1 = document.getElementById("email").value

    let age1 = document.getElementById("age").value

    let num =Math.random();
    let obj= {
        id : Math.round(num*1000),
        pic:pic1,
        name:name1,
        email:email1,
        age:age1
    }

    data.push(obj);
showdata(data)

})


function showdata(data){
    tbody.innerHTML = "";
data.map((ele) =>{

    tbody.innerHTML += `
    
    <tr>
        <td><img src ="${ele.pic}"/></td>
        <td>${ele.name}</td>
        <td>${ele.email}</td>
        <td>${ele.age}</td>
        <td><button class="btn btn-warning">Edit</button></td>
        <td><button class="btn btn-danger">Delete</button></td>
    </tr>
    `
})
}


let tbody = document.getElementById("tbody");

data.map((ele) =>{

    tbody.innerHTML += `
    
    <tr>
        <td><img src ="${ele.pic}"/></td>
        <td>${ele.name}</td>
        <td>${ele.email}</td>
        <td>${ele.age}</td>
        <td><button class="btn btn-warning">Edit</button></td>
        <td><button class="btn btn-danger">Delete</button></td>
    </tr>
    `
})