import express from "express";
import { RequestValidation } from "../classes/RequestValidation";
import { requestValidationConfig } from "../config/requestValidationConfig";
import {
  authEmployees,
  createEmployee,
  employeeLoginController,
  employerLogin,
  employerRegister,
} from "../controllers/authControllers";

const authRouter = express.Router();

authRouter.post(
  "/employer/register",
  RequestValidation.validateFunction(requestValidationConfig.employerRegister),
  employerRegister
);

authRouter.post(
  "/employer/login",
  RequestValidation.validateFunction(requestValidationConfig.employerLogin),
  employerLogin
);

authRouter.post(
  "/employee/create",
  RequestValidation.validateFunction(requestValidationConfig.createEmployee),
  createEmployee
);
authRouter.post(
  "/employee/authentication",
  RequestValidation.validateFunction(requestValidationConfig.employeeAuth),
  authEmployees
);
authRouter.post(
  "/employee/login",
  // RequestValidation.validateFunction(requestValidationConfig.employeeAuth), // todo add validation config
  employeeLoginController
);

export default authRouter;
