const UserController = require('./controllers/UserController')
const AuthenticatePolicy = require('./policies/AuthenticatePolicy')
const AttackPointController = require('./controllers/AttackPointController')
const AttackController = require('./controllers/AttackController')
const RoleApplyController = require('./controllers/RoleApplyController')
module.exports = (app) => {
  // app.post('/user/login',UserController.login)
  app.get('/users/4', (req, res) => {
    res.send({
      msg: 'hello node router',
    })
  })
  // app.get(
  //   '/users/2',
  //   res.send({
  //     msg: 'hello node router',
  //   })
  // )

  app.get(
    '/users/:id',

    UserController.getUserById
  )
  app.get(
    '/users',

    UserController.getUserAll
  )
  app.get(
    '/attack',

    AttackController.getAttackAll
  )
  app.post('/users', UserController.register)
  app.put('/users/:email', UserController.update)
  app.delete('/users/:id', UserController.delete)
  app.post('/users/login', UserController.login)
  app.post('/attack-point', AttackPointController.enter)
  app.get('/attack-point/:id', AttackPointController.getAttackPointById)
  app.put('/attack-point/:id', AttackPointController.update)
  app.post('/attack', AttackController.enter)
  app.post('/role-apply', RoleApplyController.enter)
  app.get('/role-apply', RoleApplyController.getApplyAll)
  app.delete('/role-apply/:id', RoleApplyController.delete)
}
