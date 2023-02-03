function sorteio(nomes){
    let num = Math.floor(Math.random() * 10);
    console.log("exercicio 1-)", nomes[num])
}
sorteio(["renyee","jao","pedro","gabriel","rafael","igor","richarlison","junior","carlao","josué"]);

// -----------------------------------------------------------------------------------------------
console.log("")

function sorteios(nomes,x){
    let nums = []
    let i = 0
    let j = 0
    let repetido = 0
    do{
        nums[i] = Math.floor(Math.random() * 10)
        if(i == 0)
            i++
        else{
             repetido = 0
             for(j = 0; j < i; j++){
                if(nums[i] == nums[j])
                     repetido = 1
             }
             if(repetido == 0)
                i++
        }
    }while(i < x)
    
    for(i = 0; i < x; i ++)
        console.log("exercício 2-)", nomes[nums[i]])
}

sorteios(["renyee","jao","pedro","gabriel","rafael","igor","richarlison","junior","carlao","josué"], 5)

// -----------------------------------------------------------------------------------------------
console.log("")

function campeonato(times, grupos){
    let nums = []
    let i = 0
    let j = 0
    let repetido = 0
    do{
        nums[i] = Math.floor(Math.random() * 40)
        if(i == 0)
            i++
        else{
             repetido = 0
             for(j = 0; j < i; j++){
                if(nums[i] == nums[j])
                     repetido = 1
             }
             if(repetido == 0)
                i++
        }
    }while(i < 40)

    let total = 40 / grupos;
    let t = 0

    for(i = 0; i < grupos; i++){
        for(j = 0; j < total; j ++){
            console.log("exercício 3-)", times[nums[t]])
            t++
        }
        console.log("-----------------")
    }
}
campeonato(["1","2","3","4","5","6","7","8","9","10",
            "11","12","13","14","15","16","17","18","19","20",
            "21","22","23","24","25","26","27","28","29","30",
            "31","32","33","34","35","36","37","38","39","40", ], 5)

// -----------------------------------------------------------------------------------------------
console.log("")

function idade(data){
    let today = 2023
    console.log("excercício 4-)", 2023 - data)
}
idade(2005)

// -----------------------------------------------------------------------------------------------
console.log("")

function idadePrecisa(dn, dd, dm){
    let date = new Date()
    let ano = date.getFullYear()
    var idade = ano - dn

    if(dm > date.getMonth()+1){
            console.log("exercício 5-)", idade -1)
    }else if(dm == date.getMonth()+1){
        if(dd > date.getDate()){
            console.log("exercício 5-)", idade -1)
        }else{
            console.log("exercício 5-)", idade)
        }
    }
}
idadePrecisa(2005,16,3)
