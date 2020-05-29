// import { EnvironmentConstants } from "../../../../Common/constants/environmentConstants";
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import { create } from 'apisauce'
import { endPoints } from '../endPoints'

class LoginService {
   api

   constructor() {
      this.api = create({
         baseURL: 'dgs'
      })
   }

   loginAPI = requestObj => {
      return networkCallWithApisauce(
         this.api,
         endPoints.Login,
         requestObj,
         apiMethods.get
      )
   }
}

export default LoginService
