"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponse = void 0;
var Messages_1 = require("../constants/Messages");
var HttpResponse = /** @class */ (function () {
    function HttpResponse(expressResponseObj, message, result, statusCode) {
        if (message === void 0) { message = ""; }
        if (result === void 0) { result = ""; }
        if (statusCode === void 0) { statusCode = 200; }
        this.expressResponseObj = expressResponseObj;
        this.message = message;
        this.result = result;
        this.statusCode = statusCode;
    }
    HttpResponse.prototype.sendResponse = function () {
        this.expressResponseObj.status(this.statusCode).json({
            // status: this.statusCode,
            status: true,
            message: this.message,
            result: this.result,
            statusCode: this.statusCode,
        });
    };
    HttpResponse.prototype.sendErrorResponse = function (error) {
        this.expressResponseObj.status(500).json({
            // status: error && error.statusCode ? error.statusCode : 500,
            status: false,
            message: error && error.error && error.error.message
                ? error.error.message
                : error && error.message
                    ? error.message
                    : Messages_1.Messages.INTERNAL_SERVER_ERROR,
            error: error,
        });
    };
    HttpResponse.prototype.unauthorizedResponse = function () {
        this.expressResponseObj.status(403).json({
            status: false,
            message: "You are unauthorized to perform this action.",
            statusCode: 403,
        });
    };
    return HttpResponse;
}());
exports.HttpResponse = HttpResponse;
