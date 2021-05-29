import { JsonController, Param, Body, Get, Post, Delete, Patch, UseBefore } from 'routing-controllers';
import { RequestBody } from '../interfaces/requestBody';
import { ToolsRepository } from '../repository/tools'
import { getRequestsMiddleware } from '../middlewares/requestLogger'
import { validateApiToken } from '../middlewares/authentication'


@JsonController()
@UseBefore(getRequestsMiddleware, validateApiToken)
class RestController {

  private tools: ToolsRepository

  constructor() {
    this.tools = new ToolsRepository()
  }

  @Get('/tools')
  async getAllTools() {
    return this.tools.getAllTools()
  }

  @Post('/tools/')
  async insertTool(@Body() request: RequestBody) {
    return this.tools.createTool(request)
  }

  @Patch('/tools/:id')
  async updateTool(@Param('id') id: number, @Body() request: RequestBody) {
    return this.tools.updateTool(id, request)
  }

  @Delete('/tools/:id')
  async delete(@Param('id') id: number) {
    return this.tools.removeTool(id)
  }

}

export default RestController