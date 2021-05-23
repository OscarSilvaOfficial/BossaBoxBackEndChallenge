import "reflect-metadata"
import RestController from './controller/index'
import { createExpressServer } from 'routing-controllers';

const app = createExpressServer({
  controllers: [RestController], // TODO Controllers
});

app.listen(3000, () => {
  console.log(`Server on | PORT 3000`)
})