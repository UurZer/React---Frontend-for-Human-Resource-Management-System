import axios from "axios";
let baseUrl = "http://localhost:8080/api/workexperiences/";
export default class WorkExperienceService {
    getWorkExperiences(){
        return axios.get(`${baseUrl}getall`)
    }
}