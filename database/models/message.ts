import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose'

@modelOptions({
    schemaOptions: { collection: 'messages', versionKey: false },
    options: { allowMixed: 0 }
})
export class Message {
    @prop({ required: true })
    public sender!: string

    @prop({ required: true })
    public receiver!: string

    @prop({ required: true })
    public message!: string
}

export const MessageModel = getModelForClass(Message)
