import { message, base, messageRequired } from './common'

export const getMessage = base

export const getMessages = base

export const deleteMessage = base

export const updateMessage = base.keys({
    body: message
})

export const createMessage = base.keys({
    body: messageRequired
})

export const sendMessage = base.keys({
    body: message
})
