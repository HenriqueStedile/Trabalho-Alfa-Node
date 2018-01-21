const Model = require('./model')
const ModelUser = require('./../User/model')

const ACTIONS_PATH = './../../'


//const create = require(ACTIONS_PATH + 'actions/create')(Model)

const create = (req, res) => {
  ModelUser.count({
    _id: req.body.teacher,
    type: "teacher"
  }).then((c) => {
    if (c > 0) {
      require(ACTIONS_PATH + 'actions/create')(Model)(req, res)
    }else {
      res.send("The informed user is not a teacher")
    }
  })
    .catch((err) => res.send(err.message))
}

const find = require(ACTIONS_PATH + 'actions/find')(Model)

const findOne = require(ACTIONS_PATH + 'actions/findOne')(Model)

const populate = require(ACTIONS_PATH + 'actions/populate')(Model)

const update = require(ACTIONS_PATH + 'actions/update')(Model)

const remove = require(ACTIONS_PATH + 'actions/remove')(Model)


module.exports = {
  create,
  find,
  findOne,
  populate,
  update,
  remove
}
