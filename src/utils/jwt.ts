import { sign, verify } from 'jsonwebtoken'
import { config } from '../config'

function generateJWT(userInfo: string) {
  const token = sign(
    {userInfo: userInfo}, 
    config.secret, 
  )
  return token
}

function decodeJWT(token: string) {

  try {
    verify(token, config.secret)
  } catch (e) {
    return false
  }
  return true
}

export {
  generateJWT, decodeJWT
}