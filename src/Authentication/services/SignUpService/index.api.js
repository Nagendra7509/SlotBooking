import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import { endPoints } from '../endPoints'

class SignUpService {

   api

   constructor() {
      this.api = create({
         baseURL: 'https://80db821aa62d.ngrok.io'
      })
   }

   signUpAPI = requestObj => {
      return networkCallWithApisauce(
         this.api,
         '/api/slot_booking/user/signup/v1/',
         requestObj,
         apiMethods.post
      );
   }
}

export default SignUpService;
