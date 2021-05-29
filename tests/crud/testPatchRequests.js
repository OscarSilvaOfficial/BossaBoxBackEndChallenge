const { requestApi } = require('./axiosBase.js');

module.exports = {

  
  patchTool: async () => {
    const payload = {
      title: 'test1',
      link: 'https://google.com',
      description: 'Teste de inseção de tool',
      tags: ['test 1', 'test 2']
    }
  
    await requestApi.patch('/tools/1', payload).then(res => console.log(res.data))
  }

}

