import React from 'react'

import { observable } from 'mobx'

type ObjectProps = {
   washing_machine_id: string
   status: string
}

class AdminModel {
   @observable washingMachineId: string
   @observable washingMachineStatus: string

   constructor(obj: ObjectProps) {
      this.washingMachineId = obj.washing_machine_id
      this.washingMachineStatus = obj.status
   }
}

export default AdminModel
