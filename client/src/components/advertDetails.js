import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchAdvert, updateAdvert} from '../actions/adverts'
import AdvertForm from './AdvertForm'


class AdvertDetails extends PureComponent {
  state = {
    edit: false
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  componentWillMount(props) {
    this.props.fetchAdvert(this.props.match.params.id)
  }

  updateAdvert = (advert) => {
    this.props.updateAdvert(this.props.match.params.id, advert)
    this.toggleEdit()
  }

  render() {
    const {advert} = this.props
    if (!advert) return null

    return (
      <div>
        {
          this.state.edit &&
          <AdvertForm initialValues={advert} onSubmit={this.updateAdvert} />
        }

        {
          !this.state.edit &&
          <div>
            <button onClick={ this.toggleEdit }>edit</button>
            <h1>{ advert.title }</h1>
          </div>
        }
      </div>
    )
  }
}
const mapStateToProps = function (state, props) {
  return {
    advert: state.advert
  }
}
export default connect(mapStateToProps, {fetchAdvert, updateAdvert})(AdvertDetails)
