export interface SlotsDateObject {
   date: string
}

export interface AvailableSlotsTimeSlotsObjectTypes {
   start_time: string
   end_time: string
   is_available: boolean
}

export interface BookedSlotsObjectTypes {
   date: string
   start_time: string
   end_time: string
}

export interface StartAndEndTimeObjectTypes {
   start_time: string
   end_time: string
}

export interface UpComingSlotsDetailsObjectTypes {
   washing_machine_id: string
   time_slot: StartAndEndTimeObjectTypes
}

export interface APIavailableSlotsResponseObjectTypes {
   available_slots: Array<{
      date: string
      time_slots: Array<AvailableSlotsTimeSlotsObjectTypes>
   }>
}

export interface APIupcomingSlotsResponseObjectTypes {
   upcoming_slots: Array<{
      date: string
      washing_machine_id: string
      time_slot: StartAndEndTimeObjectTypes
   }>
}

export interface APIpreviousSlotsResponseObjectTypes {
   previous_slots: Array<{
      date: string
      time_slot: StartAndEndTimeObjectTypes
      washing_machine_id: string
   }>
}
