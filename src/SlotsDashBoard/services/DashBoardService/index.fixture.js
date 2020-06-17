import availableSlotsResponse from '../../fixtures/getResponse.json'

class DashBoardService {
   availableSlotsResponseAPI() {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(availableSlotsResponse)
         }, 1000)
      })
   }

   upcomingSlotsResponseAPI() {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(availableSlotsResponse)
         }, 1000)
      })
   }

   previousSlotsResponseAPI() {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(availableSlotsResponse)
         }, 1000)
      })
   }

   postBookedSlot() {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(200)
         }, 1000)
      })
   }

   postCancelSlot() {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(200)
         }, 1000)
      });
   }
}

export default DashBoardService
