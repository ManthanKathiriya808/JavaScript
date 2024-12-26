let data = []

let tbody = document.getElementById("tbody")


document.getElementById("form").addEventListener("submit",function(e){

    e.preventDefault()
    let id = document.getElementById("id").value 
    let todo_list = document.getElementById("todo_list").value



    if(id){

        let updatedData = data.map((ele) =>{

            if(ele.id == id){
                ele.list = document.getElementById("todo_list").value
                 document.getElementById("submit").innerHTML = "Enter Task"
                document.getElementById("submit").style.background = "#380E60"
            }


            return ele
        })


        localStorage.setItem("data",JSON.stringify(updatedData))
        data = JSON.parse(localStorage.getItem("data"))
        showData(data)
    }


    else{
         let num = Math.random()

    let obj ={
        "id" : Math.round(num*1000),
        "list":todo_list,
        "status": false,
        "time": Date()
    }

    data.push(obj)

    localStorage.setItem("data",JSON.stringify(data))
    data = JSON.parse(localStorage.getItem("data"))

    showData(data)
    }
   




    document.getElementById("id").value =""
    document.getElementById("todo_list").value =""
})

function check(id){
    let statusData = data.map((ele) => {
        if(ele.id === id){
            ele.status = !ele.status;
        }
         return ele;
    })
    

    localStorage.setItem("data",JSON.stringify(statusData))
     showData(JSON.parse(localStorage.getItem("data")));
    
    console.log(statusData)
    }

function dele(id){
   let deledData = data.filter((ele) => ele.id != id)
   localStorage.setItem("data",JSON.stringify(deledData))
    data = JSON.parse(localStorage.getItem("data"))
    showData(data)
}
function update(id){
  let updatedData = data.filter((ele) => {

        if(ele.id == id){
            document.getElementById("todo_list").value = ele.list
            document.getElementById("id").value = ele.id
        }
  })
    
  document.getElementById("submit").innerHTML = "update"
  document.getElementById("submit").style.background = "#FFC107"
}

data = JSON.parse(localStorage.getItem("data")) || []

function showData(data){

    tbody.innerHTML = ""

    data.map((ele) => {
        tbody.innerHTML += 
        `
        <tr class="${ele.status ? "table-success" : "table-danger"}">
                            <td>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="true"  onchange="check(${ele.id})" ${ele.status ? "checked" : ""} id="stat" >
                                    <label class="form-check-label" for="flexCheckDefault">
                                      
                                    </label>
                                  </div>
                            </td>
                            <td>
                                ${ele.list}
                            </td>
                            <td>
                                <button class="btn btn-warning" onclick="update(${ele.id})">Update</button>
                            </td>
                            <td>
                                <button class="btn btn-danger" onclick="dele(${ele.id})">delete</button>
                            </td>
                        </tr>
        
        `
    })
}





data.map((ele) => {
    tbody.innerHTML += 
    `
    <tr class="${ele.status ? "table-success" : "table-danger"}">
                        <td>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="true"  onchange="check(${ele.id})" ${ele.status ? "checked" : ""} id="stat" >
                                <label class="form-check-label" for="flexCheckDefault">
                                  
                                </label>
                              </div>
                        </td>
                        <td>
                            ${ele.list}
                        </td>
                        <td>
                            <button class="btn btn-warning" onclick="update(${ele.id})">Update</button>
                        </td>
                        <td>
                            <button class="btn btn-danger" onclick="dele(${ele.id})">delete</button>
                        </td>
                    </tr>
    
    `
})








