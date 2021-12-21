// in here we set the actions 
import { ActionsTypes } from '../contents/ActionsTypes'

export const setServices = (services) => {
    return {

        type: ActionsTypes.SET_SERVICES,
        data:services,

    }
}
export const selectedServices = (service) => {
    return {

        type: ActionsTypes.SELECTED_SERVICES,
        data:service,

    }
}
