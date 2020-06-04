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

    getUpdateWashingMachineSlotsDetails = requestObj => {
        return networkCallWithApisauce(
            this.api,
            endPoints,
            requestObj,
            apiMethods.get
        );

    }

    postStatusToChange = requestObj => {
        return networkCallWithApisauce(
            this.api,
            endPoints,
            requestObj,
            apiMethods.post
        );
    }

    postNewWashingMachineIdToAdd = requestObj => {
        return networkCallWithApisauce(
            this.api,
            endPoints,
            requestObj,
            apiMethods.post
        );
    }

    postUpdateSlotsDetails = requestObj => {
        return networkCallWithApisauce(
            this.api,
            endPoints,
            requestObj,
            apiMethods.post
        );
    }




}

export default AdminService;
