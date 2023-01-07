const endpointInfo = (data) => {
    
    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${data}&appid=bc1f6705bf699279a1cd4690fe7689f5`
    return url
}

module.exports = {
    endpointInfo
}