import { MessageLogic } from '../../logic/models/message'
import { checkAccess } from '../../logic/models/user/access'

import { ahandler, formatter as wrapper } from 'backend-helper-kit'

import { Request, Response, NextFunction } from 'express'

const formatter = wrapper(MessageLogic)

type status = {
    continue: boolean
    next: boolean
}

export class MessageController {
    @ahandler
    @formatter
    static async sendMessage(req: Request, res: Response, next: NextFunction): Promise<status | void> {
        checkAccess(['message', 'sendMessage'], req.session.user!)

        return {
            continue: true,
            next: false
        }
    }

    @ahandler
    @formatter
    static async updateMessage(req: Request, res: Response, next: NextFunction): Promise<status | void> {}

    @ahandler
    @formatter
    static async deleteMessage(req: Request, res: Response, next: NextFunction): Promise<status | void> {}

    @ahandler
    @formatter
    static async getMessage(req: Request, res: Response, next: NextFunction): Promise<status | void> {}

    @ahandler
    @formatter
    static async getMessages(req: Request, res: Response, next: NextFunction): Promise<status | void> {}
}
