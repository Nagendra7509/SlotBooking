import adminResponse from "../../fixtures/getAdminResponse.json";

class AdminService {
    
    adminResponse = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(adminResponse);
            }, 1000);
        });
    }
}

export default AdminService;
