import axios from "axios";
let baseUrl = "http://localhost:8080/api/advertisements/";
export default class JobAdvertisementService {

  getVerifiedJobAdvertisements() {
    return axios.get(`${baseUrl}findByIsVerifiedTrueAndStatusTrue`);
  }

  getNotVerifiedJobAdvertisements() {
    return axios.get(`${baseUrl}findByIsVerifiedFalseAndStatusTrue`);
  }

  addJobAdvertisements(advertisement) {
    let jobAdvertisement = axios.post(`${baseUrl}add`, advertisement);
    return jobAdvertisement;
  }

  getById(id) {
    let jobAdvertisement = axios.get(`${baseUrl}getByAdvertisement_Id?advertisementId=${id}`);
    return jobAdvertisement;
  }
}
