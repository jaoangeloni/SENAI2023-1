const email = document.querySelector("#email")
const senha = document.querySelector("#senha")

const login = [
        {
        "id": 1,
        "cpf": 44741604870,
        "nome": "Carlin Ruindade Pura",
        "email": "carlin@ruindade.com",
        "senha": "maldade123",
        "nascimento": new Date(16-03-2005).toLocaleDateString(),
        "endereço":[
            {
                "cep": "13417052",
                "numero": "12",
                "complemento": ""
            },
        ],
        "telefone":[
            {
                "telefone1": 1929319238,
                "telefone2": 1823182123,
                "telefone3": 1923129391
            }
        ],
        "img": "https://avowhcbwko.cloudimg.io/v7/https://empreender.nyc3.digitaloceanspaces.com/grupowhats/9c57f804fafea384fe28095b89db683a?w=400&org_if_sml=1"
    }
]

function entrar(){
    let usuario = login.find(data => {
        return(
            (data.email == email.value)
            &&
            (data.senha == senha.value)
        )
    });

    if(usuario != undefined){
        window.location.href = "../home.html"
    }else{
        alert("Email ou senha incorretos");
    }    
};

const img = document.querySelector("#img")
img.src = login[0].img;
const pId = document.querySelector("#pid")
pId.innerHTML = `<b>ID</b>: ${login[0].id}`
const pCpf = document.querySelector("#pcpf")
pCpf.innerHTML = `<b>CPF</b>: ${login[0].cpf}`
const pNome = document.querySelector("#pnome")
pNome.innerHTML = `<b>Nome</b>: ${login[0].nome}`
const pEmail = document.querySelector("#pemail")
pEmail.innerHTML = `<b>Email</b>: ${login[0].email}`
const pNascimento = document.querySelector("#pnascimento")
pNascimento.innerHTML = `<b>Nascimento</b>: ${login[0].nascimento}`