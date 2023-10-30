import { Router } from 'express'

import { MessageController } from '../controllers/message'

const messageRouter = Router()

messageRouter.post('/', MessageController.sendMessage)
messageRouter.put('/', MessageController.updateMessage)
messageRouter.delete('/', MessageController.deleteMessage)
messageRouter.get('/query', MessageController.getMessage)
messageRouter.get('/query/all/', MessageController.getMessages)

export { messageRouter }
