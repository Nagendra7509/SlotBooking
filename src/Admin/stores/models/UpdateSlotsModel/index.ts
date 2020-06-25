import React from 'react'
import TimeSlots from './TimeSlots'
import { observable } from 'mobx'
import { APIGetUpdateSlotsResponseTypes } from '../../types'

class UpdateSlotsModel {
   @observable id!: number
   @observable washingMachineId: string
   @observable day: string
   @observable timeSlots: Array<TimeSlots>

   constructor(obj: APIGetUpdateSlotsResponseTypes) {
      this.washingMachineId = obj.washing_machine_id
      this.day = obj.day
      this.timeSlots = obj.alloted_slots.map(obj => new TimeSlots(obj))
   }
}

export default UpdateSlotsModel
