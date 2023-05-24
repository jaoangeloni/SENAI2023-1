const data = document.querySelector("#data")
const card = document.querySelector(".card")
const cards = document.querySelectorAll(".card")

cards.forEach( e => {
    let quando = e.children[1].data.value

    if(new Date(quando).getDate() == new Date().getDate())
        e.classList.add("presente")
    else if(new Date(quando).getDate() > new Date().getDate())
        e.classList.add("futuro")
    else
        e.classList.add("passado")
})

function hoje(){
    cards.forEach( e => {
        let quando = e.children[1].data.value
        if(new Date(quando).getDate() < new Date().getDate() || new Date(quando).getDate() > new Date().getDate())
            e.classList.toggle("sumiu")
    })
}