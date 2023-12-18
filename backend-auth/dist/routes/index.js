"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_route_1 = __importDefault(require("./auth.route"));
var organization_route_1 = __importDefault(require("./organization.route"));
var router = express_1.default.Router();
router.use("/auth", auth_route_1.default);
router.use("/organization", organization_route_1.default);
var employee_route_1 = __importDefault(require("./employee.route"));
var router = express_1.default.Router();
router.use("/auth", auth_route_1.default);
router.use("/employee", employee_route_1.default);
exports.default = router;
