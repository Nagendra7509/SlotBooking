import adminResponse from "../../fixtures/getAdminResponse.json";
import updateSlotsResponse from "../../fixtures/getUpdateSlotsResponse.json";

class AdminService {

    adminResponse = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(adminResponse);
            }, 1000);
        });
    }

    getUpdateWashingMachineSlotsDetails = (requestObj) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(updateSlotsResponse);
            }, 1000);
        });
    }
}

export default AdminService;
