class Card {
  constructor(animal) {
    this._image = document.querySelector(`div#${animal} img`)
    this._button = document
      .querySelector(`div#${animal} button`)
      .addEventListener('click', () => this.imageUrl())
    this._animal = animal
  }

  imageUrl() {
    fetch(`https://api.the${this._animal}api.com/v1/images/search`)
      .then(response => response.json())
      .then(objArray => (this._image.src = objArray[0].url))
  }
}

const Cat = new Card('cat')
const Dog = new Card('dog')

Cat.imageUrl()
Dog.imageUrl()
