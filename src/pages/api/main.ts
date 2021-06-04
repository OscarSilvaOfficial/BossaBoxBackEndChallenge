import "reflect-metadata"
import RestController from '../../controller/api'
import TokenController  from '../../controller/token'
import { createExpressServer } from 'routing-controllers';

const app = createExpressServer({
  controllers: [
    RestController, TokenController
  ],
});

const PORT = process.env.PORT ? process.env.PORT : 3000

export default app.listen(3000, () => {
  console.log(`Server on | PORT ${PORT}`)
})