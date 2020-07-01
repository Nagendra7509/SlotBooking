import { observable, action, computed } from 'mobx'
export class Nagendra {
   @observable variable
   constructor() {
      this.init()
   }
   @action.bound
   init() {}

   clearStore = () => this.init()
}
