import $api from "../http";
import getUrlParamsString from "../utils/get-url-params-string";


export default class RegistrationService {
  async login(data) {
    console.log("Data", data)
    return $api.post(`${getUrlParamsString()}/api/v1/user/registration`, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
  }
}