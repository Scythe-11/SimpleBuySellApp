import React, {PureComponent} from 'react'

class AdvertForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
    const initialValues = this.props.initialValues || {}
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="title">Advert title</label>
					<input name="title" id="title" value={
						this.state.title || initialValues.title || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="price">Advert price</label>
					<input name="price" id="price" value={
						this.state.price || initialValues.price || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="description">Advert description</label>
					<input name="description" id="description" value={
						this.state.description || initialValues.description || ''
					} onChange={ this.handleChange } />
				</div>

				<button type="submit">Save</button>
			</form>
		)
	}
}

export default AdvertForm
