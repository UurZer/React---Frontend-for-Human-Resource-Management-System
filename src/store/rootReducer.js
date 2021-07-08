//Tüm stateleri topladığım yer

import { combineReducers } from "redux";
import cityReducer from "./reducers/cityReducer";

 
const rootReducer = combineReducers({
    getAllCities:cityReducer
})

export default rootReducer;