import { Router } from "express";
import {
  getOrganizationController,
  saveOrganizationController,
} from "../controllers/organizationControllers";
import { RequestValidation } from "../classes/RequestValidation";
import { requestValidationConfig } from "../config/requestValidationConfig";

const organizationOuter = Router();

organizationOuter.post(
  "/add",
  RequestValidation.validateFunction(requestValidationConfig.addOrganization),
  saveOrganizationController
);

organizationOuter.get("/get", getOrganizationController);

export default organizationOuter;
