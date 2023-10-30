import Joi from 'joi'
import { user } from '../user/user'

export const query = Joi.object({
    sender: Joi.string(),
    receiver: Joi.string(),
    message: Joi.string()
})

export const base = Joi.object({
    query: query.required(),
    user: user.required(),
    body: Joi.any()
})

export const message = Joi.object({
    sender: Joi.string(),
    receiver: Joi.string(),
    message: Joi.string()
})

export const messageRequired = message.keys({
    sender: Joi.string().required(),
    receiver: Joi.string().required(),
    message: Joi.string().required()
})
