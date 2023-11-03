import Joi from 'joi'
import { messageRequired } from './common'

export const createMessage = messageRequired

export const sendMessage = messageRequired

export const getMessage = messageRequired

export const getMessages = Joi.array().items(messageRequired)

export const deleteMessage = Joi.boolean().required()

export const updateMessage = Joi.boolean().required()
