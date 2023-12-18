import { model, ObjectId, Schema } from "mongoose";
import { IDatabaseSchema } from "../interfaces/IDatabaseSchema";

export interface OrganizationModel {
  orgType: string;
  isActive?: boolean;
  slug: string;
}

const schema = new Schema<OrganizationModel>({
  orgType: { type: String, required: true },
  isActive: { type: Boolean, default: false },
  slug: { type: String, required: true },
});

export const OrganizationScheme = model<OrganizationModel>(
  IDatabaseSchema.ORGANIZATIONS,
  schema
);

interface employee {
  name: string;
  mobileNumber: number;
  email: string;
  employeeType: "Manager";
  assignTo: object;
}
