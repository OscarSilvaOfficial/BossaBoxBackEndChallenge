import { PrismaClient } from '@prisma/client'
import { RequestBody } from '../interfaces/requestBody'

export class ToolsRepository {

  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async getAllTools() {
    return await this.prisma.tools.findMany({
      include: { tags: true }
    })
  }

  async removeTool(id: number) {
    
    try {
      return await this.prisma.tools.delete({
        where: { id: id }
      })
    } catch (error) {
      throw "Objeto não existe"
    } 
  }

  async updateTool(id: number, request: RequestBody) {

    let response: any = ''

    try {

      response = await this.prisma.tools.update({
        where: { id: id },
        data: {
          title: request.title,
          description: request.description,
          link: request.link,
        }
      })
      
    } catch (error) {
      response = error
    } finally {
      return response
    }
  
  }

  async createTool(request: RequestBody) {
    if (request.tags) {
      return await this.prisma.tools.create({
        data: {
          title: request.title,
          description: request.description,
          link: request.link,
          tags: {
            create: request.tags.map((data: string) => {
              return { name: data }
            })
          }
        }
      })
    } else {
      return await this.prisma.tools.create({
        data: {
          title: request.title,
          description: request.description,
          link: request.link,
        }
      })
    }
  }
}