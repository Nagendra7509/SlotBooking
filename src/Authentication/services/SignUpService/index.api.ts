import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'

import Config from '../../../Common/constants/environmentConstants'

type requestObjProps = {
   username: string
   password: string
}

class SignUpService {
   api

   constructor() {
      this.api = create({
         baseURL: Config.BASE_URL
      })
   }

   signUpAPI = (requestObj: requestObjProps): Promise<any> => {
      return networkCallWithApisauce(
         this.api,
         '/api/slot_booking/user/signup/v1/',
         requestObj,
         apiMethods.post
      )
   }
}

export default SignUpService
