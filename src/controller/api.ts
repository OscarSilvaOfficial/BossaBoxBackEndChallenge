import { JsonController, getMetadataArgsStorage, Param, Body, Get, Post, Delete, Patch, UseBefore, HttpCode } from 'routing-controllers';
import { RequestBody } from '../interfaces/requestBody';
import { ToolsRepository } from '../repository/tools'
import { getRequestsMiddleware } from '../middlewares/requestLogger'
import { validateApiToken } from '../middlewares/authentication'
import { routingControllersToSpec } from 'routing-controllers-openapi'


@JsonController('/tools')
@UseBefore(getRequestsMiddleware, validateApiToken)
class RestController {

  private tools: ToolsRepository

  constructor() {
    this.tools = new ToolsRepository()
  }

  @Get('/')
  async getAllTools() {
    return this.tools.getAllTools()
  }

  @HttpCode(201)
  @Post('/')
  async insertTool(@Body() request: RequestBody) {
    return this.tools.createTool(request)
  }

  @Patch('/:id')
  async updateTool(@Param('id') id: number, @Body() request: RequestBody) {
    return this.tools.updateTool(id, request)
  }

  @HttpCode(204)
  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.tools.removeTool(id)
  }

  @Get('/docs')
  docs() {
    const storage = getMetadataArgsStorage()
    return routingControllersToSpec(storage)
  }

}

export default RestController