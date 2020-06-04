import React from "react";
import { API_FAILED, API_FETCHING, API_SUCCESS, API_INITIAL } from "@ib/api-constants";
import AdminStore from ".";
import AdminServices from "../../services/AdminServices/index.api";
import adminResponse from "../../fixtures/getAdminResponse.json";
import updateSlotsResponse from "../../fixtures/getUpdateSlotsResponse.json";
import AdminModel from "../models/AdminModel";
import UpdateSlotsModel from "../models/UpdateSlotsModel";

/*global jest*/
/*global expect*/


describe('adminStore Tests', () => {
    let adminStore, adminServiceAPI;

    beforeEach(() => {

        adminServiceAPI = new AdminServices();
        adminStore = new AdminStore(adminServiceAPI);
    });

    it('should initialising adminStore', () => {

        expect(adminStore.getAdminResponseStatus).toBe(API_INITIAL);
        expect(adminStore.getAdminResponseError).toBe(null);
        expect(adminStore.getUpdateSlotsResponseStatus).toBe(API_INITIAL);
        expect(adminStore.getUpdateSlotsResponseError).toBe(null);
        expect(adminStore.getPostStatusOfWashingMachineResponseStatus).toBe(API_INITIAL);
        expect(adminStore.getPostStatusOfWashingMachineResponseError).toBe(null);
        expect(adminStore.getPostNewWashingMachineIdStatus).toBe(API_INITIAL);
        expect(adminStore.getPostNewWashingMachineIdError).toBe(null);
        expect(adminStore.getPostUpdateSlotsStatus).toBe(API_INITIAL);
        expect(adminStore.getPostUpdateSlotsError).toBe(null);

        expect(adminStore.adminResponse).toStrictEqual([]);
        expect(adminStore.updateSlotsResponse).toStrictEqual([]);
        expect(adminStore.activeWashingMachines).toStrictEqual([]);
        expect(adminStore.inActiveWashingMachines).toStrictEqual([]);

    });

    it('should test fetching get Admin Response', () => {
        const mockLoadingPromise = new Promise((resolve, reject) => {});

    });

});
