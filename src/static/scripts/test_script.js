async function register(nome, sobrenome, email, senha) {



    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    var body = JSON.stringify({
        "nome": nome.value,
        "sobrenome": sobrenome.value,
        "email": email.value,
        "senha": senha.value
    });

    var requestOptions = {
        method: 'POST',
        headers: headers,
        body: body,
        redirect: 'follow' //pesquisar
    };

    let response = await fetch("/usuario", requestOptions)
        .then(response => response.json())

    console.log(response);
}

async function validaUsuario(email, senha) {

    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    var body = JSON.stringify({
        "email": email.value,
        "senha": senha.value
    });

    var requestOptions = {
        method: 'POST',
        headers: headers,
        body: body,
        redirect: 'follow' //pesquisar
    };

    let response = await fetch("/validaUsuario", requestOptions)
        .then(response => response.json())

    console.log(response);
}

