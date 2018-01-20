const mongoose = require( 'mongoose' )

const MODEL_NAME = 'Course'

const _schema = {
  name: String,
  teacher: { type: Schema.Types.ObjectId, ref: 'User' },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}
const schema = new mongoose.Schema( _schema )
const Model = mongoose.model( MODEL_NAME, schema )

module.exports = Model
