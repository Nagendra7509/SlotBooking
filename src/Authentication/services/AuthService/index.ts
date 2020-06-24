import { RequestObject, GetLoginResponse } from '../../stores/types'

export interface AuthService {
   loginAPI: (requestObject: RequestObject) => Promise<GetLoginResponse>

   signUpAPI: (requestObject: RequestObject) => Promise<{}>
}
