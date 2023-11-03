import { NotificationController } from './controllers/notification'

import expressWs from 'express-ws'
import Express, { Router } from 'express'
import { wsConfig } from './middlewares/header-config'

export const app = Express()
export const wsApp = expressWs(app)

export const wsConnect = Router()

wsConnect.ws('/connect', wsConfig, NotificationController.connect)

app.use('/ws', wsConnect)
