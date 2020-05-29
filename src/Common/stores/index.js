import AuthenticationStore from '../../Authentication/stores/AuthenticationStore'
import SlotsDashBoardStore from '../../SlotsDashBoard/stores/SlotsDashBoardStore'
//import LoginService from "../../Authentication/services/LoginService/index.api";
import SignUpService from '../../Authentication/services/SignUpService/index.api'

import DashBoardService from "../../SlotsDashBoard/services/DashBoardService/index.fixture";

import LoginService from '../../Authentication/services/LoginService/index.fixture';

const loginService = new LoginService();
const signUpService = new SignUpService();
const dashBoardService = new DashBoardService();

const authenticationStore = new AuthenticationStore(loginService, signUpService)
const slotsDashBoardStore = new SlotsDashBoardStore(dashBoardService)
export default { authenticationStore, slotsDashBoardStore }
