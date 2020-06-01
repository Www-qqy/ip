const { User } = require('../models')
const config = require('../config')
const JWT = require('jsonwebtoken')

function tokenSign({ id, email }) {
  try {
    return JWT.sign(
      { id, email },
      config.token.secretOrPrivateKey,
      config.token.options
    )
  } catch (error) {
    throw error
  }
}

module.exports = {
  async register(req, res) {
    try {
      console.log('1111', req.body)
      const user = await User.create(req.body)
      console.log('2222', req.body)
      res.status(201).send({
        code: 200,
        user,
        token: tokenSign(user),
      })
    } catch (error) {
      res.send({
        code: 400,
        error: '该邮箱已注册',
      })
    }
  }, //增加
  async getUserById(req, res) {
    try {
      console.log(req.body)
      const user = await User.findByPk(req.params.id)
      if (user) {
        res.status(201).send({
          user,
        })
      } else {
        res.status(400).send({
          code: 400,
          error: '没有找到对应数据',
        })
      }
    } catch (error) {
      res.status(500).send({
        code: 500,
        error: '数据查询失败',
      })
    }
  }, //查询
  async getUserAll(req, res) {
    try {
      console.log(req.body)
      const user = await User.findAll({
        attributes: ['id', 'email', 'role'],
      })
      if (user) {
        res.status(201).send({
          user,
        })
      } else {
        res.status(400).send({
          code: 400,
          error: '没有找到对应数据',
        })
      }
    } catch (error) {
      res.status(500).send({
        code: 500,
        error: '数据查询失败',
      })
    }
  }, //全部查询
  async update(req, res) {
    try {
      console.log(req.body)
      const user = await User.update(req.body, {
        where: {
          email: req.params.email,
        },
      })
      res.status(200).send({
        user,
        message: '数据更新成功',
      })
    } catch (error) {
      res.status(500).send({
        code: 500,
        error: '数据更新失败',
      })
    }
  }, //修改
  async delete(req, res) {
    try {
      console.log(req.body)
      const user = await User.destroy({
        where: {
          id: req.params.id,
        },
      })
      res.status(200).send({
        user,
        message: '数据删除成功',
      })
    } catch (error) {
      res.status(500).send({
        code: 500,
        error: '数据删除失败',
      })
    }
  }, //删除
  async login(req, res) {
    try {
      console.log(req.body)
      const user = await User.findOne({
        where: {
          email: req.body.email,
          role: req.body.role, // 自动封装到了req.body里
        },
      })
      let isValidPassword = user.comparePassword(req.body.password)
      console.log(isValidPassword, req.body.password)
      if (isValidPassword) {
        res.send({
          code: 200,
          user: user.toJSON(),
          token: tokenSign(user),
        })
      } else {
        res.status(403).send({
          code: 403,
          error: '用户名或密码错误',
        })
      }
    } catch (error) {
      res.send({
        code: 403,
        error: '用户名或密码错误',
      })
    }
  }, //删除
}
// 接受前端的请求
