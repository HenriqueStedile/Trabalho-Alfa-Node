module.exports = (Model) => (req, res) => {
    const query = {
         "name": { $regex: req.query.name, $options: 'i' } 
    }
    Model.findOne(query)
      .then((data) => res.json(data))
      .catch((err) => console.log('ERRO: ', err))
  }