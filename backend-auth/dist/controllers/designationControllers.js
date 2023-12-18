"use strict";
// import { Request, Response } from "express";
// import { ObjectId } from "mongoose";
// import { designationServices } from "../services/designationServices";
// export const getDesignation = async (req: Request, res: Response) => {
//   const params = {
//     orgType: "IT",
//   };
//   designationServices(params);
// };
// export interface orgSchema {
//   organizationName: string;
//   designations: string[]; // according to organization
// }
// // this will be another collection for designation which is not related with organization
// export interface desSchema {
//   companyId: ObjectId;
//   designations: string[];
// }
// interface companyConfig {
//   companyId: string | ObjectId;
//   numberOfEmployees: number;
//   organizationType: string;
//   designations: ObjectId[]; // objectId of that collection which belongs to this company.
//   team: ObjectId[]; // objectId of that collection which belongs to this company.
//   projects: ObjectId[]; // objectId of that collection which belongs to this company.
// }
