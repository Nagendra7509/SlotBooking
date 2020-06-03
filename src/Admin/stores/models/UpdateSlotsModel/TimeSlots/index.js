import React from "react";
import { observable } from "mobx";


class TimeSlots {

    @observable startTime;
    @observable endTime;

    constructor(obj) {
        this.startTime = obj.start_time;
        this.endTime = obj.end_time;
    }
}

export default TimeSlots;
