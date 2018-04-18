import {FETCHED_ALL_ADVERTS, ADD_ADVERT, REMOVE_ADVERT} from '../actions/adverts'

export default function (state = [], action) {
  switch (action.type) {
    case FETCHED_ALL_ADVERTS:
      return action.payload

    case ADD_ADVERT:
  	  return [...state, action.payload]

  	case REMOVE_ADVERT:
  	  return state.filter(advert => advert.id !== action.payload)


    default:
      return state
  }
}
