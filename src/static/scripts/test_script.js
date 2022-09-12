async function registerUser(nome, sobrenome, email, senha) {

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let body = JSON.stringify({
        "nome": nome.value,
        "sobrenome": sobrenome.value,
        "email": email.value,
        "senha": senha.value
    });

    let requestOptions = {
        method: 'POST',
        headers: headers,
        body: body,
        redirect: 'follow'
    };

    let response = await fetch("/usuario", requestOptions)
        .then(response => response.json())

    alert(response.message);
}

async function validaUsuario(email, senha) {

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let body = JSON.stringify({
        "email": email.value,
        "senha": senha.value
    });

    let requestOptions = {
        method: 'POST',
        headers: headers,
        body: body,
        redirect: 'follow'
    };

    let response = await fetch("/validaUsuario", requestOptions)
        .then(response => response.json())

    console.log(response);
}

