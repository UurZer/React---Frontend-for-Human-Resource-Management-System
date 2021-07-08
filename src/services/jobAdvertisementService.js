import axios from "axios";
let baseUrl = "http://localhost:8080/api/advertisements/";
export default class JobAdvertisementService {
  getJobAdvertisements() {
    return axios.get(`${baseUrl}getall`);
  }
  addJobAdvertisements(advertisement) {
    let jobAdvertisement = axios.post(`${baseUrl}add`, advertisement);
    return jobAdvertisement;
  }
}
