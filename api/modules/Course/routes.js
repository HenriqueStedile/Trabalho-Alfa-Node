const express = require('express')
const router = express.Router()
const url = require('url');
const querystring = require('querystring')

const Controller = require('./controller')

/*
router.get('/', (req, res, next) =>
  Controller.find(req, res, {})
)*/

router.get('/', (req, res, next) => {
  const url_parts = url.parse(req.url)
  const query = querystring.parse(url_parts.query)
  if (typeof query.name == "undefined")
    Controller.find(req, res)
  else
    Controller.findByName(req, res, query)
})

router.get('/:id', (req, res, next) =>
  Controller.findOne(req, res)
)

router.get('/:id/populate', (req, res, next) =>
  Controller.populate(req, res)
)

router.post('/', (req, res, next) =>
  Controller.create(req, res)
)

router.put('/:id', (req, res, next) =>
  Controller.update(req, res)
)

router.delete('/:id', (req, res, next) =>
  Controller.remove(req, res)
)

module.exports = router
