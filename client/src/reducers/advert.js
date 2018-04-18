import {FETCHED_DETAILED_ADVERT, UPDATE_ADVERT} from '../actions/adverts'

export default function (state = null, action) {
  switch (action.type) {
    case FETCHED_DETAILED_ADVERT:
      return action.payload

    case UPDATE_ADVERT:
      if (action.payload.id === state.id) {
        return action.payload
      }
      else return state

      default:
        return state
    }
  }
