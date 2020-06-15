import React from 'react'
import { observable } from 'mobx'

class AvailableSlotsModel {
   @observable date
   @observable timingSlots

   constructor(obj) {
      this.date = obj.date
      this.timingSlots = obj.time_slots
   }
}

export default AvailableSlotsModel
