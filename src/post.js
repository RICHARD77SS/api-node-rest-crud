
function fazPost(url, body) {
    console.log("Body =", body)
    
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}


function addUser() {
    event.preventDefault()
    let url = "http://localhost:3000/person"

    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let salary = document.getElementById("salary").value

    body = {
        "name": name,
        "email": email,
        "salary": salary
    }

    fazPost(url, body)
}