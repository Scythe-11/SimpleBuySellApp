// adverts.js
const adverts = [
  {
    id: 1,
    title: 'Handbag',
    price: 1450
  },
  {
    id: 5,
    title: 'Heater',
    price: 550
  },
  {
    id: 7,
    title: 'T-shirt',
    price: 10
  }
]

export default function (state = adverts, action) {
  switch (action.type) {
    default:
      return state
  }
}
