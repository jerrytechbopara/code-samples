"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var RequestValidation_1 = require("../classes/RequestValidation");
var requestValidationConfig_1 = require("../config/requestValidationConfig");
var authControllers_1 = require("../controllers/authControllers");
var authRouter = express_1.default.Router();
authRouter.post("/employer/register", RequestValidation_1.RequestValidation.validateFunction(requestValidationConfig_1.requestValidationConfig.employerRegister), authControllers_1.employerRegister);
authRouter.post("/employer/login", RequestValidation_1.RequestValidation.validateFunction(requestValidationConfig_1.requestValidationConfig.employerLogin), authControllers_1.employerLogin);
authRouter.post("/employee/create", RequestValidation_1.RequestValidation.validateFunction(requestValidationConfig_1.requestValidationConfig.createEmployee), authControllers_1.createEmployee);
authRouter.post("/employee/authentication", RequestValidation_1.RequestValidation.validateFunction(requestValidationConfig_1.requestValidationConfig.employeeAuth), authControllers_1.authEmployees);
authRouter.post("/employee/login", 
// RequestValidation.validateFunction(requestValidationConfig.employeeAuth), // todo add validation config
authControllers_1.employeeLoginController);
exports.default = authRouter;
