import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import { endPoints } from '../endPoints'

class SignUpService {

   api

   constructor() {
      this.api = create({
         baseURL: 'sg'
      })
   }

   signUpAPI = requestObj => {
      return networkCallWithApisauce(
         this.api,
         endPoints.SignUp,
         requestObj,
         apiMethods.post
      );
   }
}

export default SignUpService;
