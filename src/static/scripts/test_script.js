async function register(nome, sobrenome, email, senha) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "nome": nome.value,
        "sobrenome": sobrenome.value,
        "email": email.value,
        "senha": senha.value
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow' //pesquisar
    };

    let response = await fetch("/usuario", requestOptions)
        .then(response => response.json())

    console.log(response);
}