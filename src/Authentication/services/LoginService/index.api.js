import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import { endPoints } from '../endPoints'

class LoginService {

   api

   constructor() {
      this.api = create({
         baseURL: 'https://80db821aa62d.ngrok.io'
      })
   }

   loginAPI = (requestObj) => {
      return networkCallWithApisauce(
         this.api,
         '/api/slot_booking/user/login/v1/', requestObj,
         apiMethods.post
      );
   }

   // postCredentials = requestObj => {
   //    return networkCallWithApisauce(
   //       this.api,
   //       '/api/slot_booking/user/login/v1/',
   //       requestObj,
   //       apiMethods.post
   //    )
   // }
}

export default LoginService;
