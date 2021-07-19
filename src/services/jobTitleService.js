import axios from "axios";
export default class JobTitleService{
    controllerUrl="http://localhost:8080/api/jobtitles/";
    getJobTitles(){
        return axios.get(this.controllerUrl+"getall")
    }
}   