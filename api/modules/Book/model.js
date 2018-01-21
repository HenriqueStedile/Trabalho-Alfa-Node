const mongoose = require('mongoose')

const MODEL_NAME = 'Book'

const _schema = {
  title: { type: String, required: true },
  author: String,
  pages: Number,
}
const schema = new mongoose.Schema(_schema)
const Model = mongoose.model(MODEL_NAME, schema)

module.exports = Model
