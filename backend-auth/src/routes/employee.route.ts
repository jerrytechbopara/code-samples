import { Router } from "express";
import {
  getEmployeesController,
  getSingleEmployeeController,
  updateEmployeeDetailsControllers,
} from "../controllers/employeeControllers";

const employeeRoute = Router();

employeeRoute.get("/get", getEmployeesController);
employeeRoute.get("/get/:_id", getSingleEmployeeController);
employeeRoute.put("/update", updateEmployeeDetailsControllers);

export default employeeRoute;
