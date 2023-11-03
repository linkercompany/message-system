// import { checkAccess } from '../../logic/models/user/access'

import { aWsHandler, ahandler } from 'backend-helper-kit'

import { Request, Response, NextFunction } from 'express'

import { wsFormatter as wsWrapper, formatter } from 'backend-helper-kit'

export const notifications: any = {}

const wsFormatter = wsWrapper(notifications)
const reqFormatter = formatter(notifications)

type status = {
    continue: boolean
    next: boolean
}

export class NotificationController {
    @aWsHandler
    @wsFormatter
    static async connect(ws: any, req: Request): Promise<status | void> {}

    @ahandler
    @reqFormatter
    static async sendMessage(req: Request, res: Response, next: NextFunction): Promise<status | void> {}
}
