import { observable } from 'mobx'
import { AvailableSlotsTimeSlotsObjectTypes } from '../../types'

class AvailableSlotsModel {
   @observable date: string
   @observable timingSlots: Array<AvailableSlotsTimeSlotsObjectTypes>

   constructor(obj) {
      this.date = obj.date
      this.timingSlots = obj.time_slots
   }
}

export default AvailableSlotsModel
