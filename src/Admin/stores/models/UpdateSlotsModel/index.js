import React from "react";
import TimeSlots from "./TimeSlots";
import { observable } from "mobx";


class UpdateSlotsModel {
    @observable washingMachineId;
    @observable day;
    @observable timeSlots;

    constructor(obj) {
        this.washingMachineId = obj.washingMachine_id;
        this.day = obj.day;
        this.timeSlots = obj.time_slots.map(obj => new TimeSlots(obj));
    }

}

export default UpdateSlotsModel;
