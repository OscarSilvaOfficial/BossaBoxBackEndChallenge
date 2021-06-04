import "reflect-metadata"
import RestController from '../controller/api'
import TokenController  from '../controller/token'
import { createExpressServer } from 'routing-controllers';

const app = createExpressServer({
  controllers: [
    RestController, TokenController
  ],
});


app.listen(80, () => {
  console.log(`Server on | PORT 80`)
})