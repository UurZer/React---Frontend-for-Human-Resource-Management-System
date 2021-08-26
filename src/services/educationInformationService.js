import axios from "axios";
let controllerUrl="http://localhost:8080/api/educationinformations/";
export default class EducationInformationService {
    getEducations(){
        console.log(`${controllerUrl}getall`);
        return axios.get(`${controllerUrl}getall`);
    }
}