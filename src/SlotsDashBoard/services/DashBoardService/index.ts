import {
   APIavailableSlotsResponseObjectTypes,
   APIupcomingSlotsResponseObjectTypes,
   APIpreviousSlotsResponseObjectTypes,
   BookedSlotsObjectTypes
} from '../../stores/types'

interface DashBoardService {
   availableSlotsResponseAPI: () => Promise<
      APIavailableSlotsResponseObjectTypes
   >

   upcomingSlotsResponseAPI: () => Promise<APIupcomingSlotsResponseObjectTypes>

   previousSlotsResponseAPI: () => Promise<APIpreviousSlotsResponseObjectTypes>

   postBookedSlot: (requestObject: BookedSlotsObjectTypes) => Promise<{}>

   postCancelSlot: (requestObject: BookedSlotsObjectTypes) => Promise<{}>
}

export default DashBoardService
