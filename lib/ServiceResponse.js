"use strict";
var ServiceResponse = (function () {
    function ServiceResponse(status, message) {
        this.status = status;
        this.message = message;
    }
    return ServiceResponse;
}());
exports.ServiceResponse = ServiceResponse;
