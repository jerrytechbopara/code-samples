"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationScheme = void 0;
var mongoose_1 = require("mongoose");
var IDatabaseSchema_1 = require("../interfaces/IDatabaseSchema");
var schema = new mongoose_1.Schema({
    orgType: { type: String, required: true },
    isActive: { type: Boolean, default: false },
    slug: { type: String, required: true },
});
exports.OrganizationScheme = (0, mongoose_1.model)(IDatabaseSchema_1.IDatabaseSchema.ORGANIZATIONS, schema);
