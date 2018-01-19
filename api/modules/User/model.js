const mongoose = require( 'mongoose' )

const MODEL_NAME = 'User'
const _schema = {
  name: String,
  type: String,
  email: String
}
const schema = new mongoose.Schema( _schema )
const Model = mongoose.model( MODEL_NAME, schema )

module.exports = Model
