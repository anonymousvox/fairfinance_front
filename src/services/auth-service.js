import $api from "../http";
import getUrlParamsString from "../utils/get-url-params-string";


export default class AuthService {
    async login(data) {
        return $api.post(`${getUrlParamsString()}`, data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
    }
}