import { Response } from "express";
import { Messages } from "../constants/Messages";

export class HttpResponse {
  constructor(
    private expressResponseObj: Response,
    private message: string = "",
    private result: any = "",
    private statusCode: number = 200
  ) {}

  sendResponse() {
    this.expressResponseObj.status(this.statusCode).json({
      // status: this.statusCode,
      status: true,
      message: this.message,
      result: this.result,
      statusCode: this.statusCode,
    });
  }

  sendErrorResponse(error: any) {
    this.expressResponseObj.status(500).json({
      // status: error && error.statusCode ? error.statusCode : 500,
      status: false,
      message:
        error && error.error && error.error.message
          ? error.error.message
          : error && error.message
          ? error.message
          : Messages.INTERNAL_SERVER_ERROR,
      error: error,
    });
  }

  unauthorizedResponse() {
    this.expressResponseObj.status(403).json({
      status: false,
      message: "You are unauthorized to perform this action.",
      statusCode: 403,
    });
  }
}
