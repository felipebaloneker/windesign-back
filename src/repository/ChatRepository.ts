import { EntityRepository, Repository } from "typeorm";
import { Chat } from "../entity/Chat";

@EntityRepository(Chat)
class ChatRepository extends Repository<Chat>{}
export {ChatRepository}