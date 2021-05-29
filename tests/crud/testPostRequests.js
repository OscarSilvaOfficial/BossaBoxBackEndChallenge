const { requestApi } = require('./axiosBase.js');

module.exports = {

  postTool: async () => {
    const payload = {
      title: 'test',
      link: 'https://google.com',
      description: 'Teste de inseção de tool',
      tags: ['test 1', 'test 2']
    }
  
    await requestApi.post('/tools', payload).then(res => console.log(res.data))
  }

}


