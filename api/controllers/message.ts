import { MessageLogic } from '../../logic/models/message'
import { checkAccess } from '../../logic/models/user/access'

import { ahandler, formatter as wrapper, returnFormatter } from 'backend-helper-kit'

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
        checkAccess(['message', 'send-message'], req.session.user!)

        res.json(
            returnFormatter(
                await MessageLogic.sendMessage({
                    body: req.body,
                    query: req.query,
                    user: req.session.user!
                })
            )
        )

        return {
            continue: false,
            next: true
        }
    }

    @ahandler
    @formatter
    static async createMessage(req: Request, res: Response, next: NextFunction): Promise<status | void> {
        checkAccess(['message', 'create-message'], req.session.user!)
    }

    @ahandler
    @formatter
    static async updateMessage(req: Request, res: Response, next: NextFunction): Promise<status | void> {
        throw new Error('Method not implemented.')
    }

    @ahandler
    @formatter
    static async deleteMessage(req: Request, res: Response, next: NextFunction): Promise<status | void> {
        throw new Error('Method not implemented.')
    }

    @ahandler
    @formatter
    static async getMessage(req: Request, res: Response, next: NextFunction): Promise<status | void> {
        checkAccess(['message', 'read-message'], req.session.user!)
    }

    @ahandler
    @formatter
    static async getMessages(req: Request, res: Response, next: NextFunction): Promise<status | void> {
        checkAccess(['message', 'read-message'], req.session.user!)
    }
}
