import { Router } from 'express'

import { NotificationController } from '../controllers/notification'

export const notificationRouter = Router()

notificationRouter.post('/send-message', NotificationController.sendMessage)
