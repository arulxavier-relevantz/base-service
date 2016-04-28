"use strict";
var ServiceResponse_1 = require("./ServiceResponse");
var BaseService = (function () {
    function BaseService() {
    }
    /**
     * getServiceResponse
     *
     * @param {String} status - Response status.
     * @param {Object} message - The response object of the API request.
     */
    BaseService.prototype.createServiceResponse = function (status, message) {
        var _response = new ServiceResponse_1.ServiceResponse(status, message);
        return _response;
    };
    return BaseService;
}());
exports.BaseService = BaseService;
