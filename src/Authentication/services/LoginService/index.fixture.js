import usersResponse from '../../fixtures/getLoginResponse.json'

class LoginService {
   loginAPI() {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(usersResponse)
         }, 1000)
      })
   }

   postCredentials() {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(200)
         }, 1000)
      })
   }
}

export default LoginService
