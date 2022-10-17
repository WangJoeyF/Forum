const Router = require("koa-router");
const { create, avatarInfo } = require('../controller/user.controller')
const userRouter = new Router({ prefix: "/users" });

const {
    verifyUser,
    handlePassword
} = require('../middleware/user.middleware')

userRouter.post("/",verifyUser,handlePassword,create);
//头像
userRouter.get("/:userId/avatar",avatarInfo);

module.exports = userRouter;