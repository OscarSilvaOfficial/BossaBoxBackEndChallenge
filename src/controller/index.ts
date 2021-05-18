// import { Tools } from '../models/Tools'
// import { JsonController, Param, Body, Get, Post, Delete, Patch } from 'routing-controllers';

// @JsonController()
// class RestController {
  
//   @Get('/')
//   async select() {
//     return 'await Tools.find()'
//   }

//   @Post('/')
//   async insert(@Body() request: any) {

//     const generic = new Tools(request.name)
//     generic.save()
//     return generic
    
//   }

//   @Patch('/:id')
//   async update(@Param('id') id: number, @Body() request: any) {
    
//     const tools = await Tools.findOne(id)

//     if (tools) {
//       tools.title = request.title
//       tools.link = request.link
//       tools.description = request.description
//       tools.tags = request.tags
//       console.log(request.tags)
//       tools.save()
//     } 
//     else {
//       return 'Id não existe'
//     }

//     return tools

//   }

//   @Delete('/:id')
//   async delete(@Param('id') id: number) {

//     const generic = await Tools.findOne(id)

//     if (generic) {
//       return Tools.remove(generic)
//     }
//     else {
//       return 'Id não existe'
//     }

//   }

// }

// export default RestController