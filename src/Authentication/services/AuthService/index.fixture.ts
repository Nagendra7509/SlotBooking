import usersResponse from '../../fixtures/getLoginResponse.json'
import { resolveWithTimeout } from '../../../utils/TestUtils'

class AuthServiceAPI {
   loginAPI() {
      return resolveWithTimeout(usersResponse)
   }

   signUpAPI = requestObj => {
      return resolveWithTimeout(200)
   }
}

export default AuthServiceAPI
