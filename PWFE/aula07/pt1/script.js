const arr = [5, 8, 7, 10, 6, 5, 2, 10];

const body = document.querySelector("body");

arr.forEach((item, indice) => {
    let calc = item * 2;

    let texto = document.createElement("p");

    texto.innerHTML = `${item} x 2 = ${calc}`;
    
    body.appendChild(texto);
});

let novoArr = arr.map((item, indice) => {
    let calc = item * 2;
    return calc;
});
console.log(novoArr);

let filterArr = arr.filter((item, indice) => {
    return item == 5;
})
console.log(filterArr);

let find = arr.find((item, indice) =>{
    return item == 5;
});
console.log(find)

let info = [
    {
        "nome" : "Fulano da Silva",
        "matricula" : 12345,
        "vendas" : 5
    },
    {
        "nome" : "Beltrano da Silva",
        "matricula" : 54321,
        "vendas" : 10
    },
    {
        "nome" : "Ciclano da Silva",
        "matricula" : 32154,
        "vendas" : 8
    }
];

let metaVendas = 7;

let vendedores = info.filter((item, indice) =>{
    return item.vendas >= 7;
});
console.log(vendedores);

let vendedor = info.find((item, indice) => {
    return item.matricula == 54321;
});
console.log(vendedor.nome)