import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const FETCHED_DETAILED_ADVERT = 'FETCHED_DETAILED_ADVERT'
export const FETCHED_ALL_ADVERTS = 'FETCHED_ALL_ADVERTS'
/*export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

export const deleteProduct = (productId) => (dispatch) => {
  request
    .delete(`${baseUrl}/products/${productId}`)
    .then(response => dispatch({
      type: REMOVE_PRODUCT,
      payload: productId
    }))
}
*/
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
/*
export const createProduct = (product) => (dispatch) => {
  request
    .post(`${baseUrl}/products`)
    .send(product)
    .then(response => dispatch({
      type: ADD_PRODUCT,
      payload: response.body
    }))
}

export const updateProduct = (productId, updates) => (dispatch) => {
  request
    .put(`${baseUrl}/products/${productId}`)
    .send(updates)
    .then(response => dispatch({
      type: UPDATE_PRODUCT,
      payload: response.body
    }))
}*/
