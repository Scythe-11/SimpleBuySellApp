import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
//import {fetchProduct, updateProduct} from '../actions/products'
//import ProductForm from './ProductForm'


class AdvertDetails extends PureComponent {
  componentWillMount(props) {
    this.props.fetchAdvert(this.props.match.params.id)
  }
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
    advert: state.advert
  }
}

export default connect(mapStateToProps)(AdvertDetails)
