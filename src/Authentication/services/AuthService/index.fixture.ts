import usersResponse from '../../fixtures/getLoginResponse.json'

class AuthService {
   loginAPI() {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(usersResponse)
         }, 1000)
      })
   }

   signUpAPI = requestObj => {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(200)
         }, 1000)
      })
   }
}

export default AuthService
