function acessarClima() {

    const cidadeSolicitada = document.getElementById('cicade-solicitada').value
    console.log(cidadeSolicitada)

    if(cidadeSolicitada != ''){
        fetch(`http://api.weatherapi.com/v1/current.json?key=9a210cc06cfa453a88914101232102&q=${cidadeSolicitada}&aqi=no`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            const cidade = data.location.name;
            const temperatura = data.current.temp_c
            const pais = data.location.country;
            const estado = data.location.region;
            const icon = data.current.condition.icon

            const retornoPais = document.getElementById('pais')
            const retornoCidade = document.getElementById('cidade')
            const retornoTemperatura = document.getElementById('temperatura')
            const retornoEstado = document.getElementById('estado')
            const retornoIcon = document.getElementById('icon')

            retornoPais.textContent = `Pais: ${pais}`
            retornoCidade.textContent = `Cidade: ${cidade}`
            retornoTemperatura.textContent = `Tesmperatura: ${temperatura} °C`
            retornoEstado.textContent = `Estado: ${estado}`
            retornoIcon.src = icon
        })
    .catch(error => alert('Não foi possível localizar a região descrita'))
    } else {
        alert('O campo "Cidade" não pode ser vazio')
    }
}
