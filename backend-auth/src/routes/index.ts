import express from "express";
import authRouter from "./auth.route";
import organizationOuter from "./organization.route";
import employeeRoute from "./employee.route";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/organization", organizationOuter);
router.use("/employee", employeeRoute);

export default router;
