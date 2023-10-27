// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'app/Models/Post'

export default class UsersController {
  public async index() {
    const users = await User.all()
    return users
  }
  public async store() {}
  public async show() {}
  public async update() {}
  public async destroy() {}
}
