'use strict'

let index = 0
const images = []
const time = 3000

images[0] = 'assets/images/apples.jpg'
images[1] = 'assets/images/duck.jpg'
images[2] = 'assets/images/food.jpg'
images[3] = 'assets/images/honey.jpg'
images[4] = 'assets/images/ice-cream.jpg'
images[5] = 'assets/images/pancakes.jpg'
images[6] = 'assets/images/pizza.jpg'
images[7] = 'assets/images/pizza2.jpg'
images[8] = 'assets/images/spaghetti.jpg'
images[9] = 'assets/images/table.jpg'

const changeImage = () => {
  const imgView = document.getElementById('slide')
  const imgElement = imgView.querySelector('img')
  imgElement.src = images[index]
  if (index < images.length - 1) {
    index++
  } else {
    index = 0
  }

  setTimeout(changeImage, time)
}

window.onload = changeImage
