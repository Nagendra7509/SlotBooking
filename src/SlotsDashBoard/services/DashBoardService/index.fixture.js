import availableSlotsResponse from "../../fixtures/getResponse.json";

class DashBoardService {
    responseAPI() {
        return new Promise((resolve, reject) => {
            resolve(availableSlotsResponse);
        });
    }
}

export default DashBoardService;
