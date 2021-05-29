const { requestApi } = require('./axiosBase.js');

module.exports = {

  deleteTool: async() => {
    await requestApi.delete('/tools/1').then(res => console.log(res.data))
  }

}


