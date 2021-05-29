const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:3000'

axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6Ijo6ZmZmZjoxMjcuMC4wLjEiLCJpYXQiOjE2MjIzMjI1MzF9.Z86r4aLkwHMyz0VnX2vuGM2IYJUL4IMzg3a26rGRYi0'

exports.requestApi = axios
