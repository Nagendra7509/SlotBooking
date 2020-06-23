import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import { endPoints } from '../endPoints'
import { EnvironmentConstants } from '../../../Common/constants/environmentConstants'


type requestObjProps={
   username:string,
   password:string
}

class SignUpService {
   api

   constructor() {
      this.api = create({
         baseURL: EnvironmentConstants.SLOTS_BOOKING_BASE_URL
      })
   }

   signUpAPI = (requestObj:requestObjProps):Promise<any> => {
      return networkCallWithApisauce(
         this.api,
         '/api/slot_booking/user/signup/v1/',
         requestObj,
         apiMethods.post
      )
   }
}

export default SignUpService
