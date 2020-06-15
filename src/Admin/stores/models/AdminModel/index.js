import React from 'react'

import { observable } from 'mobx'

class AdminModel {
   @observable washingMachineId
   @observable washingMachineStatus

   constructor(obj) {
      this.washingMachineId = obj.washing_machine_id
      this.washingMachineStatus = obj.status
   }
}

export default AdminModel
