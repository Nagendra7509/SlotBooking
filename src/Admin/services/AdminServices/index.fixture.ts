import adminResponse from '../../fixtures/getAdminResponse.json'
import updateSlotsResponse from '../../fixtures/getUpdateSlotsResponse.json'
import { resolveWithTimeout } from '../../../utils/TestUtils'
import AdminService from '.'
class AdminAPIService implements AdminService {
   adminResponse = () => {
      return resolveWithTimeout(adminResponse)
   }

   getUpdateWashingMachineSlotsDetails = requestObj => {
      return resolveWithTimeout(updateSlotsResponse)
   }

   postStatusToChange = requestObj => {
      return resolveWithTimeout(200)
   }

   postNewWashingMachineIdToAdd = requestObj => {
      return resolveWithTimeout(200)
   }

   postUpdateSlotsDetails = requestObj => {
      return resolveWithTimeout(200)
   }
}

export default AdminAPIService
