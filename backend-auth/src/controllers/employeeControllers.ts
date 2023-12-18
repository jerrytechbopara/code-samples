import { Request, Response } from "express";
import {
  getEmployeeServices,
  getSingleEmployeeServices,
  updateEmployeeDetailsService,
} from "../services/employeeServices";
import { EmployeesModel } from "../models/employeeModel";
import { HttpResponse } from "../classes/HttpResponse";
import { HttpStatuses } from "../interfaces/IHttpStatuses";
import { Messages } from "../constants/Messages";
import { verifyToken } from "../config/jwtConfig";
import { UpdateEmployeeDetailsProps } from "./type";

export const getEmployeesController = async (req: Request, res: Response) => {
  try {
    const token = await verifyToken(req.headers.authorization);
    if (token) {
      const companyId = token[0]._id;
      getEmployeeServices(companyId, (result: EmployeesModel | any) => {
        if (result && result.length) {
          return new HttpResponse(
            res,
            Messages.EMPLOYEE_FETCH,
            result,
            HttpStatuses.OK
          ).sendResponse();
        }
        if (result === false) {
          return new HttpResponse(
            res,
            Messages.NO_DATA,
            result,
            HttpStatuses.OK
          ).sendResponse();
        }
        new HttpResponse(res).sendErrorResponse(result);
      });
    } else {
      new HttpResponse(res).unauthorizedResponse();
    }
  } catch (error) {
    new HttpResponse(res).sendErrorResponse(error);
  }
};

export const getSingleEmployeeController = (req: Request, res: Response) => {
  const params = req.params._id;
  getSingleEmployeeServices(params, (result: EmployeesModel | any) => {
    if (result && result?.companyId) {
      return new HttpResponse(
        res,
        Messages.EMPLOYEE_FETCH,
        result,
        HttpStatuses.OK
      ).sendResponse();
    }
    if (result === false) {
      return new HttpResponse(
        res,
        Messages.NO_DATA,
        result,
        HttpStatuses.OK
      ).sendResponse();
    }
    new HttpResponse(res).sendErrorResponse(result);
  });
};

export const updateEmployeeDetailsControllers = async (
  req: Request,
  res: Response
) => {
  try {
    const token = await verifyToken(req.headers.authorization);
    if (token) {
      const params: UpdateEmployeeDetailsProps = {
        mobileNumber: req.body.mobileNumber,
        fullName: req.body.fullName,
        id: token[0]._id,
      };
      updateEmployeeDetailsService(params, (result: any) => {});
    } else {
      new HttpResponse(res).unauthorizedResponse();
    }
  } catch (error) {
    new HttpResponse(res).sendErrorResponse(error);
  }
};
