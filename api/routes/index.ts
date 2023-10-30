import { authRouter } from './auth'
import { messageRouter } from './message'

import { Express } from 'express'

export function addRoutes(app: Express) {
    app.use('/auth', authRouter)
    app.use('/message', messageRouter)
}
