let data =[
    {
        id:1,
        pic:"https://tse2.mm.bing.net/th?id=OIP.bLnnDC8ZDmyikEiSD9HhYwHaHa&pid=Api&P=0&h=180",
        name:"chini",
        email:"123@gmail.com",
        age:21
    },
    {
        id:2,
        pic:"https://tse1.mm.bing.net/th?id=OIP.47NEVXcBGruaDflMzJAsDwAAAA&pid=Api&P=0&h=180",
        name:"chini kaka",
        email:"154e3@gmail.com",
        age:27
    },
]



let tbody = document.querySelector("#tbody")



document.getElementById("form").addEventListener("submit",function(e){

    e.preventDefault();
    let id = document.querySelector("#id").value;

    if(id){

       data.map((ele) => {
        if(ele.id == id){
            ele.pic =document.getElementById("img").value
            ele.name =document.getElementById("name").value
            ele.email =document.getElementById("email").value
            ele.age =document.getElementById("age").value
         
        }
        return ele
       })

       showData(data)
    }
    else{
          let img1 =document.getElementById("img").value
    let name1 =document.getElementById("name").value
    let email1 =document.getElementById("email").value
    let age1 =document.getElementById("age").value
    let id1 =document.getElementById("id").value
    
    let num = Math.random()
    let obj ={
        id: Math.round(num*1000),
        pic:img1,
        name:name1,
        email:email1,
        age:age1
    }

    data.push(obj)
    showData(data)
    }


    document.querySelector("#img").value = ""
    document.querySelector("#name").value = ""
    document.querySelector("#email").value = ""
    document.querySelector("#age").value = ""
  
})

function update(id){
    data.map((ele) => {
        if(ele.id == id){
        document.getElementById("img").value = ele.pic
        document.getElementById("name").value = ele.name
        document.getElementById("email").value = ele.email
        document.getElementById("age").value = ele.age
        document.getElementById("id").value = ele.id
        }
    })
}


function dele(id){
    let deleData = data.filter((ele)=> ele.id != id)
    data =deleData
    showData(deleData)
}

function showData(deleData){

    tbody.innerHTML =""

    deleData.map((ele) => {
    
        tbody.innerHTML += `
            <tr ">
                <td><img class="rounded-circle" src = "${ele.pic}"></td>
                <td>${ele.name}</td>
                <td>${ele.email}</td>
                <td>${ele.age}</td>
                <td><button class="btn btn-warning" onclick="update(${ele.id})">Update</td>
                <td><button class="btn btn-danger" onclick="dele(${ele.id})">Delete</td>
                
            </tr>
        
        `
    })
}



data.map((ele) => {

    tbody.innerHTML += `
        <tr ">
            <td><img class="rounded-circle" src = "${ele.pic}"></td>
            <td>${ele.name}</td>
            <td>${ele.email}</td>
            <td>${ele.age}</td>
            <td><button class="btn btn-warning" onclick="update(${ele.id})">Update</td>
            <td><button class="btn btn-danger" onclick="dele(${ele.id})">Delete</td>
            
        </tr>
    
    `
})