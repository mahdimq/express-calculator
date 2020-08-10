const express = require('express')
const ExpressError = require('./expressError')
const { mean, median, mode } = require('./helper')

const app = express()

// parses body into json object
app.use(express.json())
// parses form data into json object
app.use(express.urlencoded({ extended: true }))

// MEAN ROUTE
app.get('/mean', (req, res, next) => {
	if (!req.query.nums) {
		throw new ExpressError(`${nums} is not a valid number`, 400)
	}
	try {
		console.log(req.query.nums)
		let numbers = req.query.nums.split(',').map((val) => parseInt(val))

		const result = {
			response: {
				operation: 'mean',
				value: mean(numbers),
			},
		}
		return res.json(result)
	} catch (err) {
		return next(err)
	}
})

// MEDIAN ROUTE
app.get('/median', (req, res, next) => {
	if (!req.query.nums) {
		throw new ExpressError(`${nums} is not a valid number`, 400)
	}
	try {
		let numbers = req.query.nums.split(',').map((val) => parseInt(val))

		const result = {
			response: {
				operation: 'median',
				value: median(numbers),
			},
		}
		return res.json(result)
	} catch (err) {
		return next(err)
	}
})

// MODE ROUTE
app.get('/mode', (req, res, next) => {
	if (!req.query.nums) {
		throw new ExpressError(`${nums} is not a valid number`, 400)
	}
	try {
		let numbers = req.query.nums.split(',').map((val) => parseInt(val))

		const result = {
			response: {
				operation: 'mode',
				value: mode(numbers),
			},
		}
		return res.json(result)
	} catch (err) {
		return next(err)
	}
})

// ERROR HANDLER
app.use((error, req, res, next) => {
	// the default status is 500 Internal Server Error
	let status = error.status || 500
	let message = error.message

	// set the status and alert the user
	return res.status(status).json({ error: { message, status } })
})

app.listen(3000, () => console.log('Server started on port 3000'))
