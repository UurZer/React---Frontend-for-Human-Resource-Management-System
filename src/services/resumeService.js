import axios from "axios";
export default class ResumeService{

    getResumes(){
        return axios.get("http://localhost:8081/api/products/getall")
    }
}