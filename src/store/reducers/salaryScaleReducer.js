import { FETCH_SALARYSCALES_PENDING, FETCH_SALARYSCALES_SUCCESS,FETCH_SALARYSCALES_ERROR } from "../actions/salaryScaleActions";
import { salaryScales } from "../initialValues/salaryScales";

const initialState = {
    salaryScales,
    pending: false,
    error: null
}

export default function salaryScaleReducer(state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_SALARYSCALES_PENDING:
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_SALARYSCALES_SUCCESS:
            return {
                ...state,
                salaryScales: payload,
                pending: false,
                error: null
            }
        case FETCH_SALARYSCALES_ERROR:
            return {
                ...state,
                pending: false,
                error: payload
            }
        default:
            return state;
    }
}