import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import { endPoints } from '../endPoints'
import Config from '../../../Common/constants/environmentConstants'
import DashBoardService from './index'

class DashBoardServiceAPI implements DashBoardService {
   api: Record<string, any>

   constructor() {
      this.api = create({
         baseURL: Config.BASE_URL
      })
   }

   availableSlotsResponseAPI = () => {
      return networkCallWithApisauce(
         this.api,
         '/api/slot_booking/available/slots/v1/',
         {},
         apiMethods.get
      )
   }

   upcomingSlotsResponseAPI = () => {
      return networkCallWithApisauce(
         this.api,
         '/api/slot_booking/upcoming/slots/v1/',
         {},
         apiMethods.get
      )
   }

   previousSlotsResponseAPI = () => {
      return networkCallWithApisauce(
         this.api,
         '/api/slot_booking/previous/slots/v1/',
         {},
         apiMethods.get
      )
   }

   postBookedSlot = requestObj => {
      return networkCallWithApisauce(
         this.api,
         '/api/slot_booking/book/slot/v1/',
         requestObj,
         apiMethods.post
      )
   }

   postCancelSlot = requestObj => {
      return networkCallWithApisauce(
         this.api,
         endPoints.DASHBOARD_END_POINT,
         requestObj,
         apiMethods.post
      )
   }
}

export default DashBoardServiceAPI

//postBookedSlot
