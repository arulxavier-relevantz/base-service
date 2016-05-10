import {ServiceResponse} from "./ServiceResponse";
let semver = require("semver");

class BaseService {

    /**
     * getServiceResponse
     *
     * @param {String} status - Response status.
     * @param {Object} message - The response object of the API request.
     */
    public createServiceResponse(status, message) {

        var _response = new ServiceResponse(status, message)
        return _response;
    }

    /**
     * validateEntityVersion - Validate Entity version.
     * 
     * @param {String} requestedVersion - Requested entity version.
     * @param {String} currentVersion - Current server entity version.
     */
    public validateEntityVersion(requestedVersion: string, currentVersion: string): boolean {
        
        // semver.lt('1.2.3', '9.8.7') // true
        return semver.lt(requestedVersion, currentVersion);
    }
}

export {BaseService}
