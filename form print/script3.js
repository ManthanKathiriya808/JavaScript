let data =[
    {
        id:1,
        pic:"https://randomuser.me/api/portraits/men/22.jpg",
        name:"john doe",
        age:11,
        email:"asdf@gmail.com",
    },
    {
        id:2,
        pic:"https://randomuser.me/api/portraits/men/22.jpg",
        name:"john doe",
        age:345,
        email:"youf@gmail.com",
    },
    
    
]

let tbody = document.querySelector("#tbody");
let id = document.querySelector("#id")

document.querySelector("#form").addEventListener("submit",function(e){

    e.preventDefault();
   

    if(id){
        let updatedData =  data.map((ele) => {
             if(ele.id == id){
                 ele.pic =document.querySelector("#pic").value ,
                 ele.name =document.querySelector("#name").value ,
                 ele.email =document.querySelector("#email").value ,
                 ele.age =document.querySelector("#age").value 
             }

             return ele;
          })
          showData(updatedData)
     
      }
      else {
 
             let num = Math.random();
             let obj = {
                 id : Math.round(num*1000),
                 pic :document.querySelector("#pic").value ,
                 name :document.querySelector("#name").value ,
                 email :document.querySelector("#email").value ,
                 age :document.querySelector("#age").value 
         
                 }
                 data.push(obj);
                 showData(data)
   
      }
     console.log(data)
     document.getElementById("pic").value =""
     document.getElementById("name").value =""
     document.getElementById("age").value =""
     document.getElementById("email").value =""
})




function dele(id){
    let deleData = data.filter((ele) => ele.id != id);
    data =deleData
    showData(deleData)
}

function update(id){
    data.map((ele) => {
        if(ele.id == id){
            document.getElementById("pic").value =ele.pic
            document.getElementById("name").value =ele.name
            document.getElementById("age").value =ele.age
            document.getElementById("email").value =ele.email
            document.getElementById("id").value =ele.id
        }

 
    })
}




function showData(deleData){

    tbody.innerHTML ="";


deleData.map((ele) => {

    tbody.innerHTML += `
        <tr>
            <td><img src = "${ele.pic}" /></td>
            <td>${ele.name}</td>
            <td>${ele.age}</td>
            <td>${ele.email}</td>
                 <td><button onclick="update(${ele.id})" class="btn btn-warning" >Update</button></td>
            <td><button onclick=" dele(${ele.id})" class="btn btn-danger" >Delete</button></td>
        </tr>
    
    `
})
}




data.map((ele) => {

    tbody.innerHTML += `
        <tr>
            <td><img src = "${ele.pic}" /></td>
            <td>${ele.name}</td>
            <td>${ele.age}</td>
            <td>${ele.email}</td>
            <td><button onclick=" update(${ele.id})" class="btn btn-warning" >Update</button></td>
            <td><button onclick=" dele(${ele.id})" class="btn btn-danger" >Delete</button></td>
        </tr>
    
    `
})