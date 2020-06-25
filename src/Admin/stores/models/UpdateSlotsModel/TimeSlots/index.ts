import React from 'react'
import { observable } from 'mobx'
import { TimeSlotsObjectTypes } from '../../../types'

class TimeSlots {
   @observable startTime: string
   @observable endTime: string
   id: string

   constructor(obj: TimeSlotsObjectTypes) {
      this.id = Math.random().toString()
      this.startTime = obj.start_time
      this.endTime = obj.end_time
   }

   onChangeFromTime = (value: string) => {
      const timeSuffix = this.startTime.slice(-2)
      this.startTime = this.startTime.replace(timeSuffix, value)
   }

   onChangeToTime = (value: string) => {
      const timeSuffix = this.endTime.slice(-2)
      this.endTime = this.endTime.replace(timeSuffix, value)
   }
}

export default TimeSlots
