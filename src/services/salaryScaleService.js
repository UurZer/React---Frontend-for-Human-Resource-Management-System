import axios from "axios";
export default class SalaryScaleService{
    controllerUrl="http://localhost:8080/api/salaryscales/";
    getSalaryScales(){
        return axios.get(this.controllerUrl+"getall")
    }
}   