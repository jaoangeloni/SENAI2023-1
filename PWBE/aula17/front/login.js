const uri = 'http://localhost:3000'
const email = document.querySelector("#email")
const senha = document.querySelector("#senha")

function autenticar() {
    let data = {
        "email": email.value,
        "senha": senha.value
    }

    let options = {
        "method": "POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(data)
    }

    fetch(uri + '/login', options)
    .then(resp => resp.json())
    .then(resp => {
        window.localStorage.setItem('Dados', JSON.stringify(resp));
        window.location.href= "./home.html";
    })
}
