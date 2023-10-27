import Route from '@ioc:Adonis/Core/Route'

Route.get('/user', 'UsersController.index')

Route.post('/user', 'UsersController.store')
