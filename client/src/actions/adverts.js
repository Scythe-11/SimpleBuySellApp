import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const FETCHED_DETAILED_ADVERT = 'FETCHED_DETAILED_ADVERT'
export const FETCHED_ALL_ADVERTS = 'FETCHED_ALL_ADVERTS'
export const ADD_ADVERT = 'ADD_ADVERT'
export const REMOVE_ADVERT = 'REMOVE_ADVERT'
export const UPDATE_ADVERT = 'UPDATE_ADVERT'

export const deleteAdvert = (advertId) => (dispatch) => {
  request
    .delete(`${baseUrl}/adverts/${advertId}`)
    .then(response => dispatch({
      type: REMOVE_ADVERT,
      payload: advertId
    }))
}

export const fetchAdvert = (advertId) => (dispatch) => {
  request
    .get(`${baseUrl}/adverts/${advertId}`)
    .then(response => dispatch({
      type: FETCHED_DETAILED_ADVERT,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const fetchAllAdverts = () => (dispatch) => {
   request
    .get(`${baseUrl}/adverts`)
    .then(response => dispatch({
      type: FETCHED_ALL_ADVERTS,
      payload: response.body.adverts
    }))
    .catch(err => alert(err))
}

export const createAdvert = (advert) => (dispatch) => {
  request
    .post(`${baseUrl}/adverts`)
    .send(advert)
    .then(response => dispatch({
      type: ADD_ADVERT,
      payload: response.body
    }))
}

export const updateAdvert = (advertId, updates) => (dispatch) => {
  request
    .put(`${baseUrl}/adverts/${advertId}`)
    .send(updates)
    .then(response => dispatch({
      type: UPDATE_ADVERT,
      payload: response.body
    }))
}
