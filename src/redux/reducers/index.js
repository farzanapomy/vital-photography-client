import { combineReducers } from 'redux';
import servicesReducers from './servicesReducers';

const reducer = combineReducers({
    allServices: servicesReducers
});


export default reducer;