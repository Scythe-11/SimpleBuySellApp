import {FETCHED_DETAILED_ADVERT} from '../actions/adverts'

export default function (state = null, action) {
  switch (action.type) {
    case FETCHED_DETAILED_ADVERT:
      return action.payload

      default:
        return state
    }
  }
