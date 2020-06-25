export interface UpdateSlotsRequestObjectTypes {
   washing_machine_id: string
   day: string
}

export interface StatusChangeRequestObjectTypes {
   washing_machine_id: string
}

export interface NewWashingMachineRequestObjectTypes {
   washing_machine_id: string
}

export interface TimeSlotsObjectTypes {
   start_time: string
   end_time: string
}

export interface PostUpdateSlotsRequestObjectTypes {
   washing_machine_id: string
   day: string
   time_slots: Array<TimeSlotsObjectTypes>
}

export interface APIGetAdminResponseTypes {
   washing_machines: Array<{ washing_machine_id: string; status: string }>
}

export interface APIGetUpdateSlotsResponseTypes {
   washing_machine_id: string
   day: string
   alloted_slots: Array<TimeSlotsObjectTypes>
}