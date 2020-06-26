import { observable } from 'mobx'

class UpComingSlotDetails {
   @observable date: string
   @observable washingMachineId: string
   @observable startTime: string
   @observable endTime: string

   constructor(obj) {
      this.date = obj.date
      this.washingMachineId = obj.washing_machine_id
      this.startTime = obj.time_slot.start_time
      this.endTime = obj.time_slot.end_time
   }
}

export default UpComingSlotDetails
