import { authRouter } from './auth'
import { messageRouter } from './message'
import { notificationRouter } from './notification'

import { Express } from 'express'

export function addRoutes(app: Express) {
    app.use('/auth', authRouter)
    app.use('/message', messageRouter)
    app.use('/notification', notificationRouter)
}
