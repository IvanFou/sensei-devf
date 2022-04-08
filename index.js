const request = new XMLHttpRequest();
request.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=hrXxLeX5eM53FDGegBcrSeULMQMfPGAyjsq9rYr6', true)

request.onload = function () {
if (request.status >= 200 && request.status < 400) {
    const data = JSON.parse(this.response);
    drawPhotos(data)
  } else {
    console.log('Ha ocurrido un error con código ' + request.status);
  }
}

request.send()

function drawPhotos(data) {
    const infoSection = document.querySelector(".info-section")

    const photoContainer = document.createElement("article")    
    const photoImage = document.createElement("section")

    const imgNasa = document.createElement("img")
    imgNasa.src = data.hdurl

    const text = document.createElement('p')
    const imgDescription = document.createTextNode(data.explanation)

    const date = document.createElement("p")
    const dateDesc = document.createTextNode(data.date)

    const titulo = document.createElement("h2")
    const textTittle = document.createTextNode(data.title)

    titulo.appendChild(textTittle)
    photoContainer.appendChild(titulo)

    date.appendChild(dateDesc)
    photoContainer.appendChild(date)

    text.appendChild(imgDescription)
    photoContainer.appendChild(text)

    photoImage.appendChild(imgNasa)

    infoSection.appendChild(photoImage)
    infoSection.appendChild(photoContainer)
}
