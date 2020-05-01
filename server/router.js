const UserController = require('./controllers/UserController')
module.exports = (app) => {
  app.get('/api', (req, res) => {
    res.send({
      msg: 'hello node router',
    })
  })
  app.get('/users/:id', UserController.getUserById)
  app.post('/users', UserController.register)
  app.put('/users/:id', UserController.update)
  app.delete('/users/:id', UserController.delete)
}
