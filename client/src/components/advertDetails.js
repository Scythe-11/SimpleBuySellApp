import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchAdvert} from '../actions/adverts'
import AdvertForm from './AdvertForm'
import PropTypes from 'prop-types'


class AdvertDetails extends PureComponent {
/*  state = {
    edit: false
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }
*/
  componentWillMount(props) {
    this.props.fetchAdvert(this.props.match.params.id)
  }

  render() {
    const {advert} = this.props
    if (!advert) return null

    return (
      <div>
           <h1>Advertised product: {advert.title}</h1>
           <h3>Price: {advert.price} €</h3>
           <h3>Description: {advert.description}</h3>
           <h3>Link to image: <a href={advert.image}>{advert.image}</a></h3>
           <h3>Contact Email: <a href='mailto:'>{advert.email}</a></h3>
           <h3>Contact Phone number: {advert.phone}</h3>
        </div>
    )
  }
}
const mapStateToProps = function (state, props) {
  return {
    advert: state.advert
  }
}
export default connect(mapStateToProps, {fetchAdvert})(AdvertDetails)
