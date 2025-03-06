document.querySelector('.busca').addEventListener('submit', (e) => {
    
    const input = document.querySelector('#searchInput').value

    if (input !== '') {
        clearInfo()
        showWarning('Carregando...')
        reqData(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid={api-key}&units=metric&lang=pt_br`) // {api-key} -> deve ser alterado pela key forneceida pelo OpenWeather
    }

    e.preventDefault()
})

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg
}

function showInfo(json) {
    showWarning('')

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`
    document.querySelector('#temperatura').innerHTML = `${json.temp} <sup>ºC</sup>`
    document.querySelector('#windVelocity').innerHTML = `${json.windSpeed} <span>km/h</span>`

    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.icon}@2x.png`)
    document.querySelector('.ventoPonto').style.transform = `rotate(${(json.windAngle - 90)}deg)`
    document.querySelector('#windAngle').innerHTML = `<span>Vento: ${json.windAngle} graus</span>`
    document.querySelector('#descricaoClima').innerHTML = `<span>${formatDescription(json.description)}</span>`

    document.querySelector('.resultado').classList.add('active')

}

function clearInfo() {
    showWarning('')
}

const formatDescription = (descClima) => descClima.replace(descClima[0], descClima[0].toUpperCase())

async function reqData(url) {
    const results = await fetch(url)
    const jsonResults = await results.json()

    if (jsonResults.cod === 200) {
        showInfo({
            name: jsonResults.name,
            country: jsonResults.sys.country,
            temp: jsonResults.main.temp,
            icon: jsonResults.weather[0].icon,
            description: jsonResults.weather[0].description,
            windSpeed: jsonResults.wind.speed,
            windAngle: jsonResults.wind.deg
        })
    } else {
        showWarning('Não encontramos esta localização')
    }
} 