import {Request,Response} from 'express'
import { CreateRequestService } from '../services/CreateRequestService'

class CreateRequestController{
    async handle(request:Request, response:Response){
        const {user_id} = request
        const {details, category_id, status} = request.body

        const createRequestController = new CreateRequestService();
        const order = await createRequestController.execute({user_id,details, category_id, status})

        return response.json(order)
    }
}
export {CreateRequestController}