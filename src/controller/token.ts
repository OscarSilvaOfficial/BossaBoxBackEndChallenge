import { JsonController, getMetadataArgsStorage, Get, UseBefore, Req} from 'routing-controllers';
import { generateJWT } from '../utils/jwt'
import { getRequestsMiddleware } from '../middlewares/requestLogger'
import { routingControllersToSpec } from 'routing-controllers-openapi'


@JsonController('/api-token')
@UseBefore(getRequestsMiddleware)
class TokenController {
  
  @Get('/')
  generateApiToken(@Req() request: any) {
    const addr = request.connection.remoteAddress
    return {
      token: generateJWT(addr)
    }
  }

  @Get('/docs')
  docs() {
    const storage = getMetadataArgsStorage()
    return routingControllersToSpec(storage)
  }

}

export default TokenController