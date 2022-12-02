import { Request,Response,NextFunction } from 'express'
import { NotFoundError } from '../helpers/apiError'

import jwt from 'jsonwebtoken'
import { Error } from 'mongoose'
import User from '../models/userModel'

export const isAuthenticatedUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token } = req.cookies

  if (!token) {
    return next(new Error('Please login to access'))
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET as string)

  req.user = await User.findById(decodedData)
  
  next()
}

/* const authorizeRoles = (...roles: any[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new Error(
          `Role: ${req.user.role} is not allowed to access this resource`
        )
      )
    }
    next()
  }
} */
const authorizeRoles = (...roles:any[]) =>{
  return (req: { user: { role: any } }, res: any, next: () => void) => {
    if (!roles.includes(req.user.role)){
     return next()
      new NotFoundError (
        `Role ${req.user.role} is not allowed to access this resource`, 403
      )
     
      }
      
      next()
    }
    
}

export default { authorizeRoles, isAuthenticatedUser }
