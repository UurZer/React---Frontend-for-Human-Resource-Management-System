import axios from "axios";
let baseUrl = "http://localhost:8080/api/jobseekers/";
export default class JobSeekerService{
    getJobSeekers(seekerId){
        return axios.get(`${baseUrl}getBySeekerId?seekerId=${seekerId}`)
    }
    getJobSeekerDto(seekerId){
        return axios.get(`${baseUrl}getDetailSeeker?seekerId=${seekerId}`)
    }
}