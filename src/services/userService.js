import axios from "axios";
let baseUrl = "http://localhost:8080/api/users/";
export default class UserService{

    getUser(){
        return axios.get(`${baseUrl}getall`)
    }
    registerUser(user){
        let registerUser= axios.post(`${baseUrl}add`,user)
        return registerUser;
    }
}