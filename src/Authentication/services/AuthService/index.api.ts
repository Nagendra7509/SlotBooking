import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
//import { endPoints } from '../endPoints'
import { EnvironmentConstants } from '../../../Common/constants/environmentConstants'
import { AuthService } from './index'
//import { GetLoginResponse } from '../../stores/types'

class AuthServiceAPI implements AuthService {
   api: Record<string, any>

   constructor() {
      this.api = create({
         baseURL: EnvironmentConstants.SLOTS_BOOKING_BASE_URL
      })
   }

   loginAPI = requestObj => {
      return networkCallWithApisauce(
         this.api,
         '/api/slot_booking/user/login/v1/',
         requestObj,
         apiMethods.post
      )
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

export default AuthServiceAPI
