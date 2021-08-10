//Tüm stateleri topladığım yer

import { combineReducers } from "redux";
import cityReducer from "./reducers/cityReducer";
import jobTitleReducer from "./reducers/jobTitleReducer";
import salaryScaleReducer from "./reducers/salaryScaleReducer";
import favoriteReducer from "./reducers/favoriteReducer";
import jobAdvertisementsReducer from "./reducers/jobAdvertisementReducer";
 
const rootReducer = combineReducers({
    favorites: favoriteReducer,
    getAllCities:cityReducer,
    getAlljobTitles:jobTitleReducer,
    getAllSalaryScales:salaryScaleReducer,
    advertisements: jobAdvertisementsReducer
})

export default rootReducer;