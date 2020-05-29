import usersResponse from "../../fixtures/getLoginResponse.json";

class LoginService {
    loginAPI() {
        return new Promise((resolve, reject) => {
            resolve(usersResponse);
        });
    }
}

export default LoginService;
