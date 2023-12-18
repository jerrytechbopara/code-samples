"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var employeeControllers_1 = require("../controllers/employeeControllers");
var employeeRoute = (0, express_1.Router)();
employeeRoute.get("/get", employeeControllers_1.getEmployeesController);
employeeRoute.get("/get/:_id", employeeControllers_1.getSingleEmployeeController);
employeeRoute.put("/update", employeeControllers_1.updateEmployeeDetailsControllers);
exports.default = employeeRoute;
