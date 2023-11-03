import Joi from 'joi'
import { user } from '../user/user'

export const date = Joi.alternatives().try(Joi.string(), Joi.date())

export const message = Joi.object({
    sender: Joi.string(),
    receiver: Joi.string(),
    message: Joi.string(),
    createdAt: date,
    updatedAt: date
})

export const messageRequired = message.keys({
    sender: Joi.string().required(),
    receiver: Joi.string().required(),
    message: Joi.string().required()
})

export const query = message

export const base = Joi.object({
    query: query.required(),
    user: user.required(),
    body: Joi.any()
})

export const sendMessage = Joi.object({
    receiver: Joi.string().required(),
    message: Joi.string().required(),
    createdAt: date,
    updatedAt: date
})
