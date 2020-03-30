'use strict'
const User = use('App/Models/User')


const Factory = use('Factory')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Matheus Brito',
      email: 'matheusbrito@redentor.edu.br',
      password: '123456'
    })

    await user.teams().create({
      name: 'NDS',
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder
