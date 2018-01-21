module.exports = (Model) => (req, res) => {
  const query = {
    _id: req.params.id
  }

  Model.remove(query)
  .then((data) => res.json(data))
  .catch((err) => res.send(err.message))
}