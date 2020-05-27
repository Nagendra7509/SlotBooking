import AuthenticationStore from "../../Authentication/stores/AuthenticationStore";
import SlotsDashBoardStore from "../../SlotsDashBoard/stores/SlotsDashBoardStore";
//import LoginService from "../../Authentication/services/LoginService/index.api";
import SignUpService from "../../Authentication/services/SignUpService/index.api";

import loginService from "../../Authentication/fixtures/getLoginResponse";

//const loginService = new LoginService();
const signUpService = new SignUpService();


const authenticationStore = new AuthenticationStore(loginService, signUpService);
const slotsDashBoardStore = new SlotsDashBoardStore();
export default { authenticationStore, slotsDashBoardStore };
