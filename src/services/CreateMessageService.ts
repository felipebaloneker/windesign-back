import { getCustomRepository } from "typeorm";
import {MessageRepository} from '../repository/MessageRepository'

interface IRequestType{
    user_id:string;
    chat_id:string;
    body:string;
    type:string;
}

class CreateMessageService{
    async execute({user_id, chat_id, body,type='text'}:IRequestType){
        const messageRepository = getCustomRepository(MessageRepository)

        if(!user_id && !chat_id){
            throw new Error("Empty Field")
        }
        const message = messageRepository.create({
            author_id:user_id,
            chat_id,
            body,
            type
        })
        await messageRepository.save(message);
        return message;
    }
}
export {CreateMessageService}