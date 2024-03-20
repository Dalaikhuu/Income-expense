import express from "express";

import {
  getRefreshTokenService,
  updateUserService,
} from "../Controllers/userController.js";
import { createNewUserService } from "../Controllers/userController.js";
import { getLoggedInUserService } from "../Controllers/userController.js";
import { tokenCheck } from "../Middleware/tokenCheck.js";
import { loginUser } from "../Middleware/loginUsers.js";

import { createRecordService } from "../Controllers/userController.js";
import { createCategoryService } from "../Controllers/userController.js";
import { getUserRecordsService } from "../Controllers/userController.js";

//Router declare to variable
const userRouter = express.Router();

//Post Functions
userRouter.post("/users", createNewUserService);

userRouter.post("/users/login", loginUser, getLoggedInUserService);

userRouter.get("/users/refresh", getRefreshTokenService);

userRouter.post("/users/update", updateUserService);

userRouter.post("/record/create", createRecordService);

userRouter.post("/records", getUserRecordsService);

userRouter.post("/category/create", createCategoryService);

//Get Functions
userRouter.get("/users/me", tokenCheck);

export default userRouter;
