import request from './index'

export default {
  delete(id) {
    var path = '/role-apply/' + id
    console.log('****************', path)
    return request.delete(path)
  },
  //   register(data) {
  //     return request.post('/users', data)
  //   },
  //   login(data) {
  //     return request.post('/users/login', data)
  //   },
  //   admin() {},
  enter(data) {
    return request.post('/role-apply', data)
  },
  async getApplyAll() {
    const response = await request.get('/role-apply')

    return response.data
  }
}
