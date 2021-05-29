const { requestApi } = require('../base/axiosBase.js');

module.exports = {

  deleteTool: async() => {
    const items = await requestApi.get('/tools').then(res => res.data)
    const id = items[0].id
    await requestApi.delete(`/tools/${id}`).then(res => res.data)
  }

}


