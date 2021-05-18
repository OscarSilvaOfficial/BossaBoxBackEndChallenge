import "reflect-metadata"
//import RestController from './controller/index'
import { createExpressServer } from 'routing-controllers';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const tools = await prisma.tools.findMany()
  console.log(tools)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

const app = createExpressServer({
  //controllers: [RestController],
});

app.listen(3000, () => {
  console.log(`Server on | PORT 3000`)
})