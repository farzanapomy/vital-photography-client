// here we create a  reducer 

import ActionsTypes from "../contents/ActionsTypes";


// create state 
const initialState = {
    services: []
}

const servicesReducers = (state = initialState, { type, data }) => {
    switch (type) {
        case ActionsTypes.SET_SERVICES:
            return state;
        default:
            return state;
    }
};

export default servicesReducers;