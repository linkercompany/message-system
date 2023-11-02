import { NotificationController } from './controllers/notification'

import expressWs from 'express-ws'
import Express, { Router } from 'express'

export const app = Express()
export const wsApp = expressWs(app)

const wsConnect = Router()

wsConnect.ws('/connect', NotificationController.connect)

app.use('/ws', wsConnect)

export { wsConnect }
