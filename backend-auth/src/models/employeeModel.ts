import { model, Schema } from "mongoose";
import { IDatabaseSchema } from "../interfaces/IDatabaseSchema";

export interface EmployeesModel {
  companyId: string;
  fullName: string;
  orgName: string;
  mobileNumber: number;
  emailId: string;
  password: string;
  employeeStatus: string;
  userType: string;
  designation: string;
  createdAt?: Date;
  updateAt?: Date;
}

const schema = new Schema<EmployeesModel>({
  companyId: { type: String, required: true },
  fullName: { type: String, required: false },
  orgName: { type: String, required: true },
  mobileNumber: { type: Number, require: false },
  emailId: { type: String, required: true },
  password: { type: String, required: false },
  employeeStatus: { type: String, required: true },
  userType: { type: String, required: true },
  designation: { type: String },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

export const EmployeesSchema = model<EmployeesModel>(
  IDatabaseSchema.EMPLOYEES,
  schema
);
