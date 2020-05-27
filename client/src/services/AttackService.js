import request from './index'

export default {
  async getUserById() {
    const response = await request.get('/users/1')

    return response.data
  },
  register(data) {
    return request.post('/users', data)
  },
  login(data) {
    return request.post('/users/login', data)
  },
  admin() {},
  enter(data) {
    return request.post('/attack', data)
  },
  getAttackPointById(id) {
    var path = '/attack-point/' + id
    console.log('00000', request.get(path))
    return request.get(path)
  }
}
