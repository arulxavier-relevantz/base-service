import {ServiceResponse} from "./ServiceResponse"
class BaseService {

    /**
     * getServiceResponse
     *
     * @param {String} status - Response status.
     * @param {Object} message - The response object of the API request.
     */
    public createServiceResponse (status, message) {

        var _response = new ServiceResponse(status, message)
        return _response;
    }
}

export {BaseService}
