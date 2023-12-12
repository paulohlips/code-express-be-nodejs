import { Request, Response } from "express"

export default class ExpressAdapter {
  static create (fn: any) {
    return async (request: Request, response: Response) => {
      const obj = await fn(request.params, request.body)
      response.status(obj?.httpCode || 200)
      response.json(obj)
    }
  }
}