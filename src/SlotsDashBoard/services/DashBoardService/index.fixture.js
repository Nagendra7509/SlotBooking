import availableSlotsResponse from "../../fixtures/getResponse.json";

class DashBoardService {
    responseAPI() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(availableSlotsResponse);
            }, 1000);
        });
    }

    postBookedSlot() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(200);
            }, 1000);
        });
    }


    postCancelSlot() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(200);
            }, 1000);
        });
    }
}

export default DashBoardService;
