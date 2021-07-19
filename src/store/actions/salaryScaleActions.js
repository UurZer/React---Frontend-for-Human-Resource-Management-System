import SalaryScaleService from "../../services/salaryScaleService";
export const FETCH_SALARYSCALES_PENDING = "FETCH_SALARYSCALES_PENDING";
export const FETCH_SALARYSCALES_SUCCESS = "FETCH_SALARYSCALES_SUCCESS";
export const FETCH_SALARYSCALES_ERROR = "FETCH_SALARYSCALES_ERROR";

export function fetchSalaryScalesPending() {
    return {
        type: FETCH_SALARYSCALES_PENDING
    }
}
export function fetchSalaryScalesSuccess(salaryScales) {
    return {
        type: FETCH_SALARYSCALES_SUCCESS,
        payload: salaryScales
    }
}
export function fetchSalaryScalesError(error) {
    return {
        type: FETCH_SALARYSCALES_ERROR,
        payload: error
    }
}

//-------

export const _fetchSalaryScales = () => {
    return async dispatch => {
        let salaryScaleService = new SalaryScaleService();
        dispatch(fetchSalaryScalesPending());
        await salaryScaleService.getSalaryScales().then(response => {
            dispatch(fetchSalaryScalesSuccess(response.data.data))
        }).catch(error => {
            dispatch(fetchSalaryScalesError(error.message))
        })
    }
}