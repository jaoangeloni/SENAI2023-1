let inpMatricula = document.querySelector("#matricula");
let inpSenha = document.querySelector("#senha");

const base = [
    {
        "nome":"Jair Bolsonaro",
        "matricula":123456,
        "senha":"asd123",
        "salario":2570.80,
        "responsavel":[
            {
                "cod":"ca3321",
                "endereco":"Rua sem calçada, 59",
                "valor":455000
            },
            {
                "cod":"ap1221",
                "endereco":"Alameda dos Santos, 22, AP. 7",
                "valor":455000
            }
        ]
    }
]

function auth() {
    let corretor = base.find(data => {
        return ((data.matricula == inpMatricula.value) && (data.senha == inpSenha.value));
    });

    if(corretor != undefined) {

        let info = {
            "nome":corretor.nome,
            "imoveis":corretor.responsavel
        }

        localStorage.setItem("corretor", JSON.stringify(info))

        window.location.href = "./home.html";
    }else {
        alert("Corretor inexistente");
    }
}
