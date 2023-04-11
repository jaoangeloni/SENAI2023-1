const input = document.querySelector("#input")


function valorInput() {
    let cidade = input.value
    api.get('/current.json?key=aadf26231a1e492fb28115659231004&q=' + cidade + '&lang=pt')
      .then(resp => {
              let icon = document.querySelector("#icon")
              let nomeCidade = document.querySelector("#nomeCidade")
              let nomeEstado = document.querySelector("#nomeEstado")
              let condition = document.querySelector("#condition")
              let localTime = document.querySelector("#localTime")
              
              icon.src = resp.data.current.condition.icon
              nomeCidade.innerHTML = resp.data.location.name
              nomeEstadoPais.innerHTML =  resp.data.location.region + ",    " + "<b>" + resp.data.location.country + "</b>"
              condition.innerHTML = "<b>" + resp.data.current.condition.text + "</b>"
              localTime.innerHTML = ",    " + new Date(resp.data.location.localtime).toLocaleDateString()
              
              let tC = document.querySelector("#tC")
              let tF = document.querySelector("#tF")
              let wind = document.querySelector("#wind")
              let humidity = document.querySelector("#humidity")
              let uv = document.querySelector("#uv")
              let precip_mm = document.querySelector("#precip_mm")
              let cloudy = document.querySelector("#cloudy")
              
              tC.innerHTML = "<b>" + resp.data.current.temp_c + "</b> ° Celsius"
              tF.innerHTML = "<b>" + resp.data.current.temp_f + "</b> ° Fahrenheit"
              wind.innerHTML = "Ventos de <b>" + resp.data.current.wind_kph + "</b> Km/H"
              humidity.innerHTML = "Umidade <b>" + resp.data.current.humidity + "%</b>"
              uv.innerHTML = "Índice UV <b>" + resp.data.current.wind_kph + "%</b>"
              precip_mm.innerHTML = "Precipitação de <b>" + resp.data.current.precip_mm + "mm</b>"
              cloudy.innerHTML = "Nebulosidade de " + "<b>" + resp.data.current.cloud + "%</b>"
        });
}

