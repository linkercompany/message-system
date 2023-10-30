import { authRouter } from './auth'
import { sampleRouter } from './sample'
import { messageRouter } from './message'

import { Express } from 'express'

export function addRoutes(app: Express) {
    app.use('/auth', authRouter)
    app.use('/sample', sampleRouter)
    app.use('/message', messageRouter)
}
