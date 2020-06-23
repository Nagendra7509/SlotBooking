import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import { endPoints } from '../endPoints'
import { EnvironmentConstants } from '../../../Common/constants/environmentConstants'

type requestObjProps={
   username:string,
   password:string
}



class LoginService {
   api

   constructor() {
      this.api = create({
         baseURL: EnvironmentConstants.SLOTS_BOOKING_BASE_URL
      })
   }

   loginAPI = (requestObj:requestObjProps):Promise<any> => {
      return networkCallWithApisauce(
         this.api,
         '/api/slot_booking/user/login/v1/',
         requestObj,
         apiMethods.post
      )
   }
}

export default LoginService
