import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchAllAdverts, createAdvert, deleteAdvert} from '../actions/adverts'
import {Link} from 'react-router-dom'
import AdvertForm from './AdvertForm'

class AdvertsList extends PureComponent {
  static propTypes = {
    adverts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })).isRequired
  }

  createAdvert = (advert) => {
    this.props.createAdvert(advert)
  }

  deleteAdvert = (AdvertId) => {
    this.props.deleteAdvert(AdvertId)
  }

  componentWillMount() {
    this.props.fetchAllAdverts()
  }

  render() {
    const {adverts} = this.props
    return (
      <div>
        <h1>All Adverts</h1>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { adverts.map(advert => (<tr key={advert.id}>
              <td>{advert.id}</td>
              <td>
                <Link to={ `/adverts/${advert.id}` }>{advert.name}</Link>
              </td>
              <td>&euro; {advert.price}.00</td>
              <td><button onClick={ () => this.deleteAdvert(advert.id) }>X</button></td>
            </tr>)) }
          </tbody>
				</table>

        <h1>Create a new Advert</h1>

        <AdvertForm onSubmit={this.createAdvert} />
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    adverts: state.adverts
  }
}

export default connect(mapStateToProps, {
  fetchAllAdverts,
  createAdvert,
  deleteAdvert
})(AdvertsList)
