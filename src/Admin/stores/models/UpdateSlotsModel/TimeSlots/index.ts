import React from 'react'
import { observable } from 'mobx'


type ObjectProps={
   start_time:string,
   end_time:string
}

class TimeSlots {
   @observable startTime:string
   @observable endTime:string
   id:number

   constructor(obj:ObjectProps) {
      this.id = Math.random()
      this.startTime = obj.start_time
      this.endTime = obj.end_time
   }

   onChangeFromTime = (value :string)=> {
      const timeSuffix = this.startTime.slice(-2)
      this.startTime = this.startTime.replace(timeSuffix, value)
      
   }

   onChangeToTime =( value:string )=> {
      const timeSuffix = this.endTime.slice(-2)
      this.endTime = this.endTime.replace(timeSuffix, value)
      
   }
}

export default TimeSlots
