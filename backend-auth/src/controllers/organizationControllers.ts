import { Request, Response, response } from "express";
import { OrganizationModel } from "../models/organizationModel";
import { HttpResponse } from "../classes/HttpResponse";
import { Messages } from "../constants/Messages";
import { HttpStatuses } from "../interfaces/IHttpStatuses";
import {
  getOrganizationService,
  saveOrganizationService,
} from "../services/organizationServices";
import { Helper } from "../classes/Helper";

export const saveOrganizationController = async (
  req: Request,
  res: Response
) => {
  if (typeof req.body.orgType === "string") {
    const params: OrganizationModel = {
      orgType: req.body.orgType,
      slug: req.body.orgType.toLowerCase(),
    };
    saveOrganizationService(params, (result: any) => {
      if (result === true) {
        return new HttpResponse(
          res,
          Messages.ORG_CREATED,
          result,
          HttpStatuses.OK
        ).sendResponse();
      }
      new HttpResponse(res).sendErrorResponse(result);
    });
  } else {
    Helper.throwError(Messages.STRING_VALUE, true, HttpStatuses.BAD_REQUEST);
  }
};

export const getOrganizationController = (req: Request, res: Response) => {
  getOrganizationService((result: any) => {
    if (result && result.length) {
      return new HttpResponse(
        res,
        Messages.ORG_FETCH,
        result,
        HttpStatuses.OK
      ).sendResponse();
    }
    new HttpResponse(res).sendErrorResponse(result);
  });
};
