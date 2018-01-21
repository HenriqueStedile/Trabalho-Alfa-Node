module.exports = (Model) => (req, res) => {

  const body = req.body

  Model.create(body)
    .then((data) => res.json(data))
    .catch((err) => res.send(err.message))
}