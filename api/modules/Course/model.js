const mongoose = require( 'mongoose' )

const MODEL_NAME = 'Course'

const _schema = {
  name: String,
  teacher: {
    type: String,
    default: 'Suissa',
    required: true
  },
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  students: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}
const schema = new mongoose.Schema( _schema )
const Model = mongoose.model( MODEL_NAME, schema )

module.exports = Model
