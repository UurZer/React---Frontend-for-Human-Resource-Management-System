//Tüm stateleri topladığım yer

import { combineReducers } from "redux";
import cityReducer from "./reducers/cityReducer";
import jobTitleReducer from "./reducers/jobTitleReducer";
import salaryScaleReducer from "./reducers/salaryScaleReducer";
 
const rootReducer = combineReducers({
    getAllCities:cityReducer,
    getAlljobTitles:jobTitleReducer,
    getAllSalaryScales:salaryScaleReducer
})

export default rootReducer;