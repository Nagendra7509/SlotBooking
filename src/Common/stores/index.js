import AuthenticationStore from '../../Authentication/stores/AuthenticationStore'
import SlotsDashBoardStore from '../../SlotsDashBoard/stores/SlotsDashBoardStore'
import SignUpService from '../../Authentication/services/SignUpService/index.api';
import DashBoardService from "../../SlotsDashBoard/services/DashBoardService/index.api";
import LoginService from '../../Authentication/services/LoginService/index.api';
import AdminService from "../../Admin/services/AdminServices/index.api";
import AdminStore from "../../Admin/stores/AdminStore";

const loginService = new LoginService();
const signUpService = new SignUpService();
const dashBoardService = new DashBoardService();
const adminService = new AdminService();

const authenticationStore = new AuthenticationStore(loginService, signUpService);
const slotsDashBoardStore = new SlotsDashBoardStore(dashBoardService);
const adminStore = new AdminStore(adminService);

export default { authenticationStore, slotsDashBoardStore, adminStore }
