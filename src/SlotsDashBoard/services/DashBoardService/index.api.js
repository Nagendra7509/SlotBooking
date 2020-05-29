import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import { endPoints } from '../endPoints'

class DashBoardService {
    api

    constructor() {
        this.api = create({
            baseURL: 'sg'
        })
    }

    responseAPI = requestObj => {
        return networkCallWithApisauce(
            this.api,
            endPoints.DASHBOARD_END_POINT,
            requestObj,
            apiMethods.get
        )
    }

    postBookedSlot = (requestObj) => {
        return networkCallWithApisauce(
            this.api,
            endPoints.DASHBOARD_END_POINT,
            requestObj,
            apiMethods.post
        );
    }

    postCancelSlot = (requestObj) => {
        return networkCallWithApisauce(
            this.api,
            endPoints.DASHBOARD_END_POINT,
            requestObj,
            apiMethods.post
        );
    }
}

export default DashBoardService;
