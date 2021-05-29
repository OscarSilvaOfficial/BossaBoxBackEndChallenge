const { requestApi } = require('../base/axiosBase.js');

module.exports = {

  patchTool: async () => {
    const payload = {
      title: 'test1',
      link: 'https://google.com',
      description: 'Teste de inseção de tool',
      tags: ['test 1', 'test 2']
    }

    const items = await requestApi.get('/tools').then(res => res.data)
    const id = items[0].id
  
    await requestApi.patch(`/tools/${id}`, payload).then(res => res.data)
  }

}

