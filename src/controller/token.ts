import { JsonController, Get, UseBefore, Req} from 'routing-controllers';
import { generateJWT } from '../utils/jwt'
import { getRequestsMiddleware } from '../middlewares/requestLogger'


@JsonController()
@UseBefore(getRequestsMiddleware)
class TokenController {
  
  @Get('/api-token')
  generateApiToken(@Req() request: any) {
    const addr = request.connection.remoteAddress
    return {
      token: generateJWT(addr)
    }
  }

}

export default TokenController