const Router = require("koa-router");

const labelRouter = new Router({prefix:"/label"});

const {
verifyAuth
} = require("../middleware/auth.middleware")

const {
    create,
    list
} = require("../controller/label.controller")

//添加标签
labelRouter.post("/",verifyAuth, create)
//展示标签接口
labelRouter.get("/",list)

module.exports = labelRouter;