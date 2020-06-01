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
  async getUserAll() {
    const response = await request.get('/users')

    return response.data
  },
  update(data) {
    var path = '/users/' + data.email
    console.log('****************', path)
    return request.put(path, data)
  }
}
