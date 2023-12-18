import { UpdateEmployeeDetailsProps } from "../controllers/type";
import { EmployeesSchema } from "../models/employeeModel";
import { ObjectId } from "mongoose";

export const getEmployeeServices = async (
  params: string,
  callBack: Function
) => {
  try {
    const result = await EmployeesSchema.find({ companyId: params });
    if (result && result.length) {
      callBack(result);
      return;
    }
    callBack(false);
  } catch (error) {
    callBack(error);
  }
};

export const getSingleEmployeeServices = async (
  params: string,
  callBack: Function
) => {
  try {
    const result = await EmployeesSchema.findById(params);
    if (result && result?.companyId) {
      callBack(result);
      return;
    }
    callBack(false);
  } catch (error) {
    callBack(error);
  }
};

export const updateEmployeeDetailsService = async (
  params: UpdateEmployeeDetailsProps,
  callBack: Function
) => {
  try {
    const result = await EmployeesSchema.updateOne(
      { _id: params.id },
      {
        $set: {
          fullName: params.fullName,
          mobileNumber: params.mobileNumber,
        },
      }
    );
    console.log("--result--", result);
  } catch (error) {
    callBack(error);
  }
};
