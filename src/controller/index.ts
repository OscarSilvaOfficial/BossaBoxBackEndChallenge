import { JsonController, Param, Body, Get, Post, Delete, Patch, HttpCode } from 'routing-controllers';
import { RequestBody } from '../interfaces/requestBody';
import { ToolsRepository } from '../repository/tools'

@JsonController()
class RestController {

  private tools: ToolsRepository

  constructor() {
    this.tools = new ToolsRepository()
  }

  @Get('/')
  async getAllTools() {
    return this.tools.getAllTools()
  }

  @Post('/')
  async insertTool(@Body() request: RequestBody) {
    return this.tools.createTool(request)
  }

  @Patch('/:id')
  async updateTool(@Param('id') id: number, @Body() request: RequestBody) {
    return this.tools.updateTool(id, request)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.tools.removeTool(id)
  }

}

export default RestController