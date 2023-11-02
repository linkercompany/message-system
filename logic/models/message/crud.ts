import * as inputTypes from '../../types/message/input-type'
import * as outputTypes from '../../types/message/output-type'

import * as inputValidators from '../../validators/message/input-type'
import * as outputValidators from '../../validators/message/output-type'

import { ErrorHelper, deleteId, avalidator as wrapper } from 'backend-helper-kit'
import { variables as config } from '../../../config'

import { MessageModel } from '../../../database/models/message'

const avalidator = wrapper(inputValidators, outputValidators, config)

const errorHelper = new ErrorHelper('Message')

export class MessageLogic {
    @avalidator
    @deleteId
    static async sendMessage(params: inputTypes.sendMessage): Promise<outputTypes.sendMessage> {
        var result = await MessageModel.create(params.body)
        errorHelper.createError(result)

        result = result.toObject()
        return result
    }

    @avalidator
    static async updateMessage(params: inputTypes.updateMessage): Promise<outputTypes.updateMessage> {
        var result = await MessageModel.updateOne(params.query, { $set: params.body })
        errorHelper.updateError(result)

        return result.modifiedCount > 0
    }

    @avalidator
    static async deleteMessage(params: inputTypes.deleteMessage): Promise<outputTypes.deleteMessage> {
        var result = await MessageModel.deleteOne(params.query)
        errorHelper.deleteError(result)

        return result.deletedCount > 0
    }

    @avalidator
    @deleteId
    static async getMessage(params: inputTypes.getMessage): Promise<outputTypes.getMessage> {
        var result = await MessageModel.findOne(params.query)
        errorHelper.getError(result)

        return result!.toObject()
    }

    @avalidator
    @deleteId
    static async getMessages(params: inputTypes.getMessages): Promise<outputTypes.getMessages> {
        var result = await MessageModel.find(params.query)
        errorHelper.getAllError(result)

        return result.map((item) => {
            return item.toObject()
        })
    }
}
