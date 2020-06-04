import React from "react";
import { observable } from "mobx";


class TimeSlots {

    @observable startTime;
    @observable endTime;
    id;

    constructor(obj) {
        this.id = Math.random();
        this.startTime = obj.start_time;
        this.endTime = obj.end_time;
    }

    onChangeFromTime = (value) => {
        const timeSuffix = this.startTime.slice(-2);
        this.startTime = this.startTime.replace(timeSuffix, value)
    }

    onChangeToTime = (value) => {
        const timeSuffix = this.endTime.slice(-2);
        this.endTime = this.endTime.replace(timeSuffix, value);
    }
}

export default TimeSlots;
