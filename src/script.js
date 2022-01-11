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
      .then(object => (this._image.src = object[0].url))
  }
}

const Cat = new Card('cat')
const Dog = new Card('dog')

Cat.imageUrl()
Dog.imageUrl()

/*
;[
  {
    breeds: [
      {
        weight: { imperial: '65 - 100', metric: '29 - 45' },
        height: { imperial: '23 - 25', metric: '58 - 64' },
        id: 9,
        name: 'Alaskan Malamute',
        bred_for: 'Hauling heavy freight, Sled pulling',
        breed_group: 'Working',
        life_span: '12 - 15 years',
        temperament:
          'Friendly, Affectionate, Devoted, Loyal, Dignified, Playful',
        reference_image_id: 'dW5UucTIW',
      },
    ],
    id: 'BbMFS3bU-',
    url: 'https://cdn2.thedogapi.com/images/BbMFS3bU-.jpg',
    width: 1280,
    height: 853,
  }
]
*/
