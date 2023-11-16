import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
    public async store({ auth, request, response }: HttpContextContract) {
        const { title, description } = request.only(['title', 'description'])
        await User = await auth.authenticate()
        await User.related('posts').create({ title, description })
        return response.status(204)
    }
}
