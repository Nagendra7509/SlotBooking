import React from "react";

import { observable } from "mobx";

class UpComingSlotDetails {

    @observable date;
    @observable washingMachineId;
    @observable startTime;
    @observable endTime;

    constructor(obj) {
        this.date = obj.date;
        this.washingMachineId = obj.washing_machine_id;
        this.startTime = obj.time_slot.start_time;
        this.endTime = obj.time_slot.end_time;

    }
}

export default UpComingSlotDetails;
