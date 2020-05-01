const UserController = require('./controllers/UserController')
const AuthenticatePolicy = require('./policies/AuthenticatePolicy')
module.exports = (app) => {
  // app.post('/user/login',UserController.login)
  // app.get('/api', (req, res) => {
  //   res.send({
  //     msg: 'hello node router',
  //   })
  // })
  // app.get(
  //   '/users/:id',
  //   AuthenticatePolicy.isValidToken,
  //   AuthenticatePolicy.getUserById
  // )

  app.get(
    '/users/:id',
    AuthenticatePolicy.isValidToken,
    UserController.getUserById
  )

  app.post('/users', UserController.register)
  app.put('/users/:id', UserController.update)
  app.delete('/users/:id', UserController.delete)
  app.post('/users/login', UserController.login)
}
