import usersResponse from '../../fixtures/getLoginResponse.json'

class LoginService {
   loginAPI() {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(usersResponse)
         }, 1000)
      })
   }

}

export default LoginService
