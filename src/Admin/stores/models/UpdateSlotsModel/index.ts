import React from 'react'
import TimeSlots from './TimeSlots'
import { observable } from 'mobx'
import { object } from "@storybook/addon-knobs"

type SlotObjectProps={
   start_time:string,
   end_time:string
}

type ObjectProps={
   washing_machine_id:string,
   day:string,
   alloted_slots:Array<SlotObjectProps>
}

class UpdateSlotsModel {
   @observable id!:number
   @observable washingMachineId:string
   @observable day:string
   @observable timeSlots:Array<TimeSlots>

   constructor(obj:ObjectProps) {
      this.washingMachineId = obj.washing_machine_id
      this.day = obj.day
      this.timeSlots = obj.alloted_slots.map(obj => new TimeSlots(obj))
   }
}

export default UpdateSlotsModel
