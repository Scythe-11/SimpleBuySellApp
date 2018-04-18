import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchAllAdverts} from '../actions/adverts'
import {Link} from 'react-router-dom'

class AdvertsList extends PureComponent {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })).isRequired
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
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { adverts.map(advert => (<tr key={advert.id}>
              <td>{advert.id}</td>
              <Link to={ `/adverts/${advert.id}` }>{advert.title}</Link>
              <td>{advert.image}</td>
              <td>&euro; {advert.price}.00</td>
            </tr>)) }
          </tbody>
				</table>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    adverts: state.adverts
  }
}

export default connect(mapStateToProps, {fetchAllAdverts})(AdvertsList)
