

let data = [

    {
        id: 1,
        pic:"https://randomuser.me/api/portraits/men/22.jpg",
        name : "recherd Adam",
        age: 24,
        email: "recher@gmail.com"
    },
    {
        id : 2,
        pic:"https://randomuser.me/api/portraits/men/22.jpg",
        name : "recherd Adam",
        age: 24,
        email: "recher@gmail.com"
    }
]






function del(id){

    let delData = data.filter((ele)=> ele.id != id)
 
 //    console.log(delData);
        data = delData;
    showData(delData)
 }

 console.log(data)





document.querySelector("#form").addEventListener("submit", function(e){

     e.preventDefault(); 

     let id = document.querySelector("#id").value;

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

   document.querySelector("#pic").value = ""
   document.querySelector("#name").value = ""
   document.querySelector("#email").value = ""
   document.querySelector("#age").value = ""
})



function edit(id){

//   let updateEle = data.find((ele) => ele.id == id);

  data.map((ele) => {

        if(ele.id == id){
            document.querySelector("#pic").value = ele.pic
            document.querySelector("#name").value = ele.name
            document.querySelector("#email").value = ele.email
            document.querySelector("#age").value = ele.age
            document.querySelector("#id").value = ele.id
            
            
        }
    })
  
    //showData(update)
}


function showData(delData){

    tbody.innerHTML = "";
    delData.map((ele) => {
    
    tbody.innerHTML += `
        <tr >
            <td><img width="50px" class="img-fluid rounded-circle" src="${ele.pic}" /></td>
            <td>${ele.name}</td>
            <td>${ele.email}</td>
            <td>${ele.age}</td>
             <td><button class="btn btn-warning" onclick="edit(${ele.id})">Edit</button></td>
             <td><button class="btn btn-danger" onclick="del(${ele.id})">Delete</button></td>
        </tr>
    `
})

// console.log(data)


}







let tbody = document.querySelector("#tbody");

data.map((ele) => {
    
    tbody.innerHTML += `
        <tr >
            <td><img width="50px" class="img-fluid rounded-circle" src="${ele.pic}" /></td>
            <td>${ele.name}</td>
            <td>${ele.email}</td>
            <td>${ele.age}</td>
            <td><button class="btn btn-warning" onclick="edit(${ele.id})">Edit</button></td>
            <td><button class="btn btn-danger" onclick="del(${ele.id})">Delete</button></td>
        </tr>
    `
})

