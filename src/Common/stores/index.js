import AuthenticationStore from "../../Authentication/stores/AuthenticationStore";
import SlotsDashBoardStore from "../../SlotsDashBoard/stores/SlotsDashBoardStore";

const authenticationStore = new AuthenticationStore();
const slotsDashBoardStore = new SlotsDashBoardStore();
export default { authenticationStore, slotsDashBoardStore };
