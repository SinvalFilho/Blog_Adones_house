// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    try {
      const users = await User.all()
      return response.status(200).json(users)
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao Buscar usuários' })
    }
  }
  public async store({ request, response }: HttpContextContract) {
    try {
      const userData = request.only(['name', 'email', 'password'])
      const user = await User.create(userData)
      return response.status(201).json(user)
    } catch (error) {
      return response.status(400).json({ message: 'Erro ao criar usuário' })
    }
  }
  public async show({ params, response }: HttpContextContract) {
    try {
      const userId = params.id
      const user = await User.find(userId)

      if (!user) {
        return response.status(404).json({ message: 'Usuário não encontrado' })
      }

      return response.status(200).json(user)
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao buscar usuário' })
    }
  }
  public async update({ params, request, response }: HttpContextContract) {
    try {
      const userId = params.id
      const user = await User.find(userId)

      if (!user) {
        return response.status(404).json({ message: 'Usuário não encontrado' })
      }

      const userData = request.only(['name', 'email', 'password'])
      user.merge(userData)
      await user.save()

      return response.status(200).json(user)
    } catch (error) {
      return response.status(400).json({ message: 'Erro ao atualizar usuário' })
    }
  }
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const userId = params.id
      const user = await User.find(userId)

      if (!user) {
        return response.status(404).json({ message: 'Usuário não encontrado' })
      }

      await user.delete()

      return response.status(200).json({ message: 'Usuário excluido com sucesso' })
    } catch (error) {
      return response.status(400).json({ message: 'Erro ao atualizar usuário' })
    }
  }
}
