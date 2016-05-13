"use strict";
var ServiceResponse_1 = require("./ServiceResponse");
var semver = require("semver");
var BaseService = (function () {
    function BaseService() {
    }
    BaseService.prototype.createServiceResponse = function (status, message) {
        var _response = new ServiceResponse_1.ServiceResponse(status, message);
        return _response;
    };
    BaseService.prototype.validateEntityVersion = function (requestedVersion, currentVersion) {
        return semver.lt(requestedVersion, currentVersion);
    };
    return BaseService;
}());
exports.BaseService = BaseService;
