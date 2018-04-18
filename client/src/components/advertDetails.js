import React, {PureComponent} from 'react'
//import {connect} from 'react-redux'
//import {fetchProduct, updateProduct} from '../actions/products'
//import ProductForm from './ProductForm'


class AdvertDetails extends PureComponent {
  render() {
    const {advert} = this.props
    if (!advert) return null
    return (
      <div>
        <h1>{ advert.id }</h1>
      </div>
    )
  }
}

export default AdvertDetails
