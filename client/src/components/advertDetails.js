import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchAdvert} from '../actions/adverts'
import AdvertForm from './AdvertForm'
import PropTypes from 'prop-types'
import './advertList.css'


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
           <h1 className="h1">Advertised product: {advert.title}</h1><br/>
           <h4><img src = { advert.image } className="imageClass"/> </h4><br/>
           <h4>Description: {advert.description}</h4>
           <h4>Price: {advert.price} €</h4>

          <br/>
           <h4>Contact Email: <a href='mailto:'>{advert.email}</a></h4>
           <h4>Contact Phone number: {advert.phone}</h4>
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
