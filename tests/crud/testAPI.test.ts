const axios = require('axios');

async function getAllElementsOfTools() {
  const data = await axios.get('http://localhost:3000/tools').then(res => res.data)
  expect(typeof data).toBe('object')
  expect('id' in data)
  expect('title' in data)
  expect('link' in data)
  expect('description' in data)
  expect('tags' in data)
}

test("Get all tools", getAllElementsOfTools)