// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {
  public async index() {
    const users = await User.all()
    return users
  }
  public async store() {
    const user = await User.create({
      name: 'Sinval',
      email: 'sinvalfilho@gmail.com',
      password: '1234',
    })
    return user
  }
  public async show() {}
  public async update() {}
  public async destroy() {}
}
