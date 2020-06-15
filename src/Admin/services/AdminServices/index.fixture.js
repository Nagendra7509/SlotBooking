import adminResponse from '../../fixtures/getAdminResponse.json'
import updateSlotsResponse from '../../fixtures/getUpdateSlotsResponse.json'

class AdminService {
   adminResponse = () => {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(adminResponse)
         }, 1000)
      })
   }

   getUpdateWashingMachineSlotsDetails = requestObj => {
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
