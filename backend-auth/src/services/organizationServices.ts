import { Helper } from "../classes/Helper";
import { Messages } from "../constants/Messages";
import { HttpStatuses } from "../interfaces/IHttpStatuses";
import {
  OrganizationModel,
  OrganizationScheme,
} from "../models/organizationModel";

export const saveOrganizationService = async (
  params: OrganizationModel,
  callBack: Function
) => {
  try {
    const result = await OrganizationScheme.find({ orgType: params.orgType });
    if (result && result.length) {
      return Helper.throwError(Messages.ORG_EXIST, true, HttpStatuses.CONFLICT);
    }
    await OrganizationScheme.create(params);
    callBack(true);
  } catch (error) {
    callBack(error);
  }
};

export const getOrganizationService = async (callBack: Function) => {
  try {
    const result = await OrganizationScheme.find();
    callBack(result);
  } catch (error) {
    callBack(error);
  }
};
