import React from 'react'
import TimeSlots from './TimeSlots'
import { observable } from 'mobx'

class UpdateSlotsModel {
   @observable id
   @observable washingMachineId
   @observable day
   @observable timeSlots

   constructor(obj) {
      this.washingMachineId = obj.washing_machine_id
      this.day = obj.day
      this.timeSlots = obj.alloted_slots.map(obj => new TimeSlots(obj))
   }
}

export default UpdateSlotsModel
