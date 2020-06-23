import adminResponse from '../../fixtures/getAdminResponse.json'
import updateSlotsResponse from '../../fixtures/getUpdateSlotsResponse.json'

type UpdateSlotsRequestObj = {
   washing_machine_id: string,
   day: string
}

type UpdateSlotsResponseObj = {

   "washing_machine_id": string,
   "day": string,
   "alloted_slots": Array<{ "start_time": string, "end_time": string }>
}



class AdminService {
   adminResponse = () => {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(adminResponse)
         }, 1000)
      })
   }

   getUpdateWashingMachineSlotsDetails = (requestObj: UpdateSlotsRequestObj):Promise<UpdateSlotsResponseObj>=> {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(updateSlotsResponse)
         }, 1000)
      })
   }

   postStatusToChange = requestObj => {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(200)
         }, 1000)
      })
   }

   postNewWashingMachineIdToAdd = requestObj => {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(200)
         }, 1000)
      })
   }

   postUpdateSlotsDetails = requestObj => {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(200)
         }, 1000)
      })
   }
}

export default AdminService
