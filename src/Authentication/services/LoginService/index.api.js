import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import { endPoints } from '../endPoints'

class LoginService {

   api

   constructor() {
      this.api = create({
         baseURL: 'dgs'
      })
   }

   loginAPI = () => {
      return networkCallWithApisauce(
         this.api,
         endPoints.Login, {},
         apiMethods.get
      )
   }

   postCredentials = requestObj => {
      return networkCallWithApisauce(
         this.api,
         endPoints.Login,
         requestObj,
         apiMethods.post
      )
   }
}

export default LoginService;
