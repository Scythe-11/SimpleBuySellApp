const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')

app.listen(4001, () => console.log('Express API listening on port 4001'))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})


const Advert = sequelize.define('advert', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  }}, {
  tableName: 'adverts',
  timestamps: false
})

app.get('/adverts', (req, res) => {
	Advert.findAll({
	  attributes: ['id', 'title', 'description', 'image', 'price', 'email', 'phone']
	})
	  .then(result => {
	    // do something with result
	    res.send({
	    	adverts: result
	    })
	  })
	  .catch(err => {
	    // there was an error, return some HTTP error code
	    res.status(500).send({error: 'Something went wrong with Postgres'})
	  })
})

app.get('/adverts/:id', (req, res) => {
	const advertId = req.params.id
	Advert.findById(advertId)
	  .then(result => {
	  	if (!result) {
	  		res.status(404).send({error: 'Does not exist'})
	  	}
	  	else {
	  		res.send(result)
	  	}
	  })
	  .catch(err => {
	    res.status(500).send({error: 'Something went wrong with Postgres'})
	  })
})

app.post('/adverts', (req, res) => {
  const advert = req.body
  console.log(advert)

  Advert.create(advert).then(entity => {
    res.status(201).send(entity)
  })
})


app.delete('/adverts/:id', (req, res) => {
  const advertId = Number(req.params.id)

  Advert.findById(req.params.id)
	  .then(entity => {
	    // change the product and store in DB
	    return entity.destroy()
	  })
	  .then(_ => {
	    // respond with the changed product and status code 200 OK
	    res.send({
	      message: 'The product was deleted succesfully'
	    })
	  })
	  .catch(error => {
	    res.status(500).send({
	      message: `Something went wrong`,
	      error
	    })
	  })
})
