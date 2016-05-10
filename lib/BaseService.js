"use strict";
const ServiceResponse_1 = require("./ServiceResponse");
let semver = require("semver");
class BaseService {
    createServiceResponse(status, message) {
        var _response = new ServiceResponse_1.ServiceResponse(status, message);
        return _response;
    }
    validateEntityVersion(requestedVersion, currentVersion) {
        return semver.lt(requestedVersion, currentVersion);
    }
}
exports.BaseService = BaseService;
