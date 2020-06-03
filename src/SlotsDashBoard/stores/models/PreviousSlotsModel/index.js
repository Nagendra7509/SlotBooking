import React from "react";

import { observable } from "mobx";


class PreviousSlotsModel {

    @observable date
    @observable startTime
    @observable endTime
    @observable washingMachineId

    constructor(obj) {
        this.date = obj.date;
        this.startTime = obj.time_slot.start_time;
        this.endTime = obj.time_slot.end_time;
        this.washingMachineId = obj.washing_machine_id;
    }

}


export default PreviousSlotsModel;
