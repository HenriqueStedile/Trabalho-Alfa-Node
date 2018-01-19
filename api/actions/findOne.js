
module.exports = (Model) => (req, res) => {
  const query = {
    _id: req.params.id
  }
  Model.findOne(query)
    .then((data) => res.json(data))
    .catch((err) => console.log('ERRO: ', err))
}