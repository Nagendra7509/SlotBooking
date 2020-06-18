import React from "react";

import TimeSlots from ".";
describe('TimeSlots tests', () => {

    let timeSlots;
    const obj = {
        start_time: "5:00 AM",
        end_time: "6:00 AM"
    }

    beforeEach(() => {
        timeSlots = new TimeSlots(obj);
    });

    it('test onChangeFromTime', () => {
        timeSlots.onChangeFromTime("PM");
        expect(timeSlots.startTime).toBe("5:00 PM");

    });

    it('test onChangeToTime', () => {
        timeSlots.onChangeToTime("PM");
        expect(timeSlots.endTime).toBe("6:00 PM");

    });

})
