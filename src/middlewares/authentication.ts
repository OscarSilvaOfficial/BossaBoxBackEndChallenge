import { decodeJWT } from '../utils/jwt'

export function validateApiToken(request, response, next) {
  const token = request.headers.authorization
  if (decodeJWT(token)) {
    next()
  } 
  else {
    throw 'Unauthorized'
  }
}