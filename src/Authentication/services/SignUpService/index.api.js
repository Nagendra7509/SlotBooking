import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import { endPoints } from '../endPoints'
import { EnvironmentConstants } from '../../../Common/constants/environmentConstants'

class SignUpService {
   api

   constructor() {
      this.api = create({
         baseURL: EnvironmentConstants.SLOTS_BOOKING_BASE_URL
      })
   }

   signUpAPI = requestObj => {
      return networkCallWithApisauce(
         this.api,
         '/api/slot_booking/user/signup/v1/',
         requestObj,
         apiMethods.post
      )
   }
}

export default SignUpService;
