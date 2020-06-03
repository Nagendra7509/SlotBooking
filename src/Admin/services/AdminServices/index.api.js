import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import { endPoints } from '../endPoints'

class AdminService {

    api

    constructor() {
        this.api = create({
            baseURL: 'dgs'
        })
    }

    adminResponse = () => {
        return networkCallWithApisauce(
            this.api,
            endPoints, {},
            apiMethods.get
        )
    }


}

export default AdminService;
