import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'MyFood',
    description:
      'Essa é a documentação da API do aplicativo MyFood feita por Pedro Alexandre',
    version: '1.0.0',
    contact: {
      name: 'Pedro Alexandre',
      email: 'alexdevcoder@gmail.com',
      url: 'https://www.linkedin.com/in/pedroalexandreed',
    },
    license: {
      name: 'GPL-3.0-or-later',
      url: 'https://spdx.org/licenses/GPL-3.0-or-later.html',
    },
  },
  servers: [
    {
      url: '/api',
      description: 'Servidor Principal',
    },
  ],
  tags: [
    {
      name: 'Login',
      description: 'APIs relacionadas a Login',
    },
    {
      name: 'Enquete',
      description: 'APIs relacionadas a Enquete',
    },
  ],
  paths,
  schemas,
  components,
}
