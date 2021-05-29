const { requestApi } = require('../base/axiosBase.js');

function getTokenAPI() {
  return requestApi.get('/api-token').then(response => response.data)
}

test("Get authentication token", getTokenAPI)