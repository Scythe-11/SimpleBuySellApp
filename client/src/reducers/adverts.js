import {FETCHED_ALL_ADVERTS} from '../actions/adverts'

export default function (state = [], action) {
  switch (action.type) {
    case FETCHED_ALL_ADVERTS:
      return action.payload

    default:
      return state
  }
}
