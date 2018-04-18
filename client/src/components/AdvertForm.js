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
  //  const initialValues = this.props.initialValues || {}
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="title">Advert title</label>
					<input name="title" id="title" value={
						this.state.title || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="description">Advert description</label>
					<input name="description" id="description" value={
						this.state.description || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="image">Advert image</label>
					<input name="image" id="image" value={
						this.state.image || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="price">Advert price</label>
					<input name="price" id="price" value={
						this.state.price || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="email">Your email address</label>
					<input name="email" id="email" value={
						this.state.email || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="phone">Your phone number</label>
					<input name="phone" id="phone" value={
						this.state.phone || ''
					} onChange={ this.handleChange } />
				</div>

				<button type="submit">Save</button>
			</form>
		)
	}
}

export default AdvertForm
