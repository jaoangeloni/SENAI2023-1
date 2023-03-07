let inpMatricula = document.querySelector("#matricula");
let inpSenha = document.querySelector("#senha");


function auth() {
    let data = {
        matricula: matricula.value,
        senha: senha.value
    }

    let options = {
        "method": "POST",
        "headers": {
            "Content-Type" : "application/json"
        },
        "body": JSON.stringify(data)
    }

    fetch("http://localhost:3000/login", options)
    .then(resp => {return resp.json()})
    .then(info => {
        if(info.id != undefined) {
            localStorage.setItem("corretor", JSON.stringify(info));
            window.location.href="../home/home.html"
        }else {
            alert(info.msg);
        }
    })

}
