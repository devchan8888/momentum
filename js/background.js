const imgs = [
    '0.jpg', '1.jpg', '2.jpg'
]
const IMAGE_PATH = "static/images"

const chosenImage = imgs[Math.floor(Math.random() * imgs.length)]

const bgImage = document.createElement("img")
bgImage.src = `${IMAGE_PATH}/${chosenImage}`

document.body.appendChild(bgImage)