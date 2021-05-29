const { requestApi } = require('./axiosBase.js');

module.exports = {

  getAllElementsOfTools: async () => {
    const apiData = await requestApi.get('/tools').then(res => res.data)
  
    apiData.map(data => {
      expect('id' in data)
      expect('title' in data)
      expect('link' in data)
      expect('description' in data)
      expect('tags' in data)
    })
  }
  
}


