import {
   UpdateSlotsRequestObjectTypes,
   StatusChangeRequestObjectTypes,
   NewWashingMachineRequestObjectTypes,
   PostUpdateSlotsRequestObjectTypes,
   APIGetUpdateSlotsResponseTypes,
   APIGetAdminResponseTypes
} from '../../stores/types'

interface AdminService {
   adminResponse: () => Promise<APIGetAdminResponseTypes>

   getUpdateWashingMachineSlotsDetails: (
      requestObject: UpdateSlotsRequestObjectTypes
   ) => Promise<APIGetUpdateSlotsResponseTypes>

   postStatusToChange: (
      requestObject: StatusChangeRequestObjectTypes
   ) => Promise<{}>

   postNewWashingMachineIdToAdd: (
      requestObject: NewWashingMachineRequestObjectTypes
   ) => Promise<{}>

   postUpdateSlotsDetails: (
      requestObject: PostUpdateSlotsRequestObjectTypes
   ) => Promise<{}>
}

export default AdminService
