import availableSlotsResponse from '../../fixtures/availableSlotsResponse.json'
import upComingSlotsResponse from '../../fixtures/upComingSlotsResponse.json'
import previousSlotsResponse from '../../fixtures/previousSlotsResponse.json'
import { resolveWithTimeout } from '../../../utils/TestUtils'
import DashBoardService from '.'

class DashBoardServiceAPI implements DashBoardService {
   availableSlotsResponseAPI() {
      return resolveWithTimeout(availableSlotsResponse)
   }

   upcomingSlotsResponseAPI() {
      return resolveWithTimeout(upComingSlotsResponse)
   }

   previousSlotsResponseAPI() {
      return resolveWithTimeout(previousSlotsResponse)
   }

   postBookedSlot(requestObject) {
      return resolveWithTimeout({})
   }

   postCancelSlot(requestObject) {
      return resolveWithTimeout({})
   }
}

export default DashBoardServiceAPI
