import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../../constants/APIConstants'
import { endPoints } from '../endPoints'
import Config from '../../../Common/constants/environmentConstants'

import AdminService from '.'

class AdminAPIService implements AdminService {
   api: Record<string, any>

   constructor() {
      this.api = create({
         baseURL: Config.BASE_URL
      })
   }

   adminResponse = () => {
      return networkCallWithApisauce(
         this.api,
         '/api/slot_booking/get/washing/machine/details/v1/',
         {},
         apiMethods.get
      )
   }

   getUpdateWashingMachineSlotsDetails = requestObj => {
      return networkCallWithApisauce(
         this.api,
         '/api/slot_booking/get/washing/machine/slots/v1/',
         requestObj,
         apiMethods.post
      )
   }

   postStatusToChange = requestObj => {
      return networkCallWithApisauce(
         this.api,
         endPoints,
         requestObj,
         apiMethods.post
      )
   }

   postNewWashingMachineIdToAdd = requestObj => {
      return networkCallWithApisauce(
         this.api,
         '/api/slot_booking/add/washing/machine/v1/',
         requestObj,
         apiMethods.post
      )
   }

   postUpdateSlotsDetails = requestObj => {
      return networkCallWithApisauce(
         this.api,
         '/api/slot_booking/update/washing/machine/slots/v1/',
         requestObj,
         apiMethods.post
      )
   }
}

export default AdminAPIService
