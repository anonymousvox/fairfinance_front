import getUrlParameter from "./get-url-parametr";

const getUrlParamsString = (f) => {
    let utm = getUrlParameter('utm');
    let contract = getUrlParameter('contract');
    let inn = getUrlParameter('inn');
    let flag = 0
    let result = ''
    if (utm !== undefined) {
        if (flag == 0) {
            result += + '/?utm=' + utm;
            flag = 1
        }
        else if (flag == 1) {
            result += '&utm=' + utm;
        }
    };
    if (contract !== undefined) {
        if (flag == 0) {
            result += '/?contract=' + contract;
            flag = 1
        }
        else if (flag == 1) {
            result += '&contract=' + contract;
        }
    };
    if (inn !== undefined) {
        if (flag == 0) {
            result += '/?inn=' + inn;
            flag = 1
        }
        else if (flag == 1) {
            result += '&inn=' + inn;
        }
    };
    return result
}

export default getUrlParamsString