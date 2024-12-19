


let tbody =document.querySelector("#tbody")

    user.map((ele) =>{

    tbody.innerHTML += `
    
    <tr>
        <td><img src =" ${ele.picture.medium}"></td>
        <td>${ele.name.title}</td>
        <td>${ele.email}</td>
        <td>${ele.city}</td>
    </tr>
    `

})