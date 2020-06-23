import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../../constants/APIConstants'
import { endPoints } from '../endPoints'
import { EnvironmentConstants } from '../../../Common/constants/environmentConstants'

class AdminService {
   api

   constructor() {
      this.api = create({
         baseURL: EnvironmentConstants.SLOTS_BOOKING_BASE_URL
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

export default AdminService
