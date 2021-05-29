const { deleteTool } = require('./testDeleteRequests.js')
const { getAllElementsOfTools } = require('./testGetRequests.js')
const { patchTool } = require('./testPatchRequests.js')
const { postTool } = require('./testPostRequests.js')

test("Post tool", postTool)
test("Patch tool", patchTool)
test("Get all tools", getAllElementsOfTools)
test("Delete tool", deleteTool)