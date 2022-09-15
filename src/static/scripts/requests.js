// Faz a inserção de usuários: REVISADO
async function insertUsers(name, surname, email, password) {

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let body = JSON.stringify({
        "name": name.value,
        "surname": surname.value,
        "email": email.value,
        "password": password.value
    });

    let requestOptions = {
        method: 'POST',
        headers: headers,
        body: body,
        redirect: 'follow'
    };

    let response = await fetch("/users", requestOptions)
        .then(response => response.json())
        .then(response => console.log(response))

    alert(response.message);
}
// Faz a validação de se um usuário existe ou não no sistema: REVISADO
async function validateUsers(email, password) {

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let body = JSON.stringify({
        "email": email.value,
        "password": password.value
    });

    let requestOptions = {
        method: 'POST',
        headers: headers,
        body: body,
        redirect: 'follow'
    };

    let response = await fetch("/validateUsers", requestOptions)
        .then(response => response.json())
        .then(response => console.log(response))
}

//window.location.replace("http://localhost:8800/system");

/*
// Simulate a mouse click:
window.location.href = "http://www.w3schools.com";

// Simulate an HTTP redirect:
window.location.replace("http://www.w3schools.com"); 
*/
