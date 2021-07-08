import axios from "axios";
export default class CityService{
    controllerUrl="http://localhost:8080/api/cities/";
    getCities(){
        return axios.get(this.controllerUrl+"getAll");
    }
}