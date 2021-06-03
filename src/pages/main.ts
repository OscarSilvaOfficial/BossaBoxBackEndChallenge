import "reflect-metadata"
import RestController from '../controller/api'
import TokenController  from '../controller/token'
import { createExpressServer } from 'routing-controllers';

const app = createExpressServer({
  controllers: [
    RestController, TokenController
  ],
});


app.listen(3000, () => {
  console.log(`Server on | PORT 3000`)
})