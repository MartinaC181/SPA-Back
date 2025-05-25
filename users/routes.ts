import express, { Router } from "express";
import { userController } from "./controller";

const userRouter = express.Router();

const { getUsers, getUser, createUser, loginUser, deleteUser, editUser } = userController;

userRouter.get("/", getUsers);
userRouter.get("/correo/:correo", getUser);
userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);
userRouter.get("/login/google", (req, res) => {
  res.send(req.user);
});
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", editUser);


export default userRouter;