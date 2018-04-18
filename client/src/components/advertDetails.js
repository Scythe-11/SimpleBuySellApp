import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
//import {fetchProduct, updateProduct} from '../actions/products'
//import ProductForm from './ProductForm'


class AdvertDetails extends PureComponent {
  render() {
    const {advert} = this.props
    if (!advert) return null
    return (
      <div>
        <h1>{ advert.description }</h1>
      </div>
    )
  }
}

const mapStateToProps = function (state, props) {
  return {
    advert: state.adverts.find(p => p.id === Number(props.match.params.id))
  }
}

export default connect(mapStateToProps)(AdvertDetails)
