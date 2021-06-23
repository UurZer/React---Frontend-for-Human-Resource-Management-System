import axios from "axios";
export default class UserService{

    getUser(){
        return axios.get("http://localhost:8081/api/products/getall")
    }
}