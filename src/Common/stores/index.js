import AuthenticationStore from '../../Authentication/stores/AuthenticationStore'
import SlotsDashBoardStore from '../../SlotsDashBoard/stores/SlotsDashBoardStore'
import SignUpService from '../../Authentication/services/SignUpService/index.api'
import DashBoardService from '../../SlotsDashBoard/services/DashBoardService/index.fixture'
import LoginService from '../../Authentication/services/LoginService/index.fixture'
import AdminService from '../../Admin/services/AdminServices/index.fixture'
import AdminStore from '../../Admin/stores/AdminStore'
import AuthService from '../../Authentication/services/AuthService/index.fixture'

//const loginService = new LoginService()
//const signUpService = new SignUpService()
const dashBoardService = new DashBoardService()
const adminService = new AdminService()

const authenticationStore = new AuthenticationStore(new AuthService())
const slotsDashBoardStore = new SlotsDashBoardStore(dashBoardService)
const adminStore = new AdminStore(adminService)

export default { authenticationStore, slotsDashBoardStore, adminStore }
