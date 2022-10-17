const fileservice = require("../service/file.service")
const userService = require("../service/user.service")
const {   APP_PORT,  APP_HOST,} = require("../app/config")

class FileController{
    async saveAvatarInfo(ctx,next){
        //1.获取头像相关信息
        const { filename,mimetype, size} = ctx.req.file;
        const { id } = ctx.user;
        //2.图像信息储存数据库
        const result = await fileservice.createAvatar(filename,mimetype, size,id);
        //3.图像地址储存users表中
        const avatarUrl = `${ APP_HOST}:${APP_PORT}/users/${id}/avatar`;
        await userService.updateAvatarUrlById(avatarUrl,id);
        ctx.body = "上传头像成功";
// console.log(ctx.req.file);
    }
    async savePictureInfo(ctx,next){
        //1.获取头像相关信息
        const files = ctx.req.files;
        const { id } = ctx.user;
        const { momentId } = ctx.query;
        //2.所有照片保存到数据库
        for(let file of files){
            const { filename,mimetype, size} = file;
            await fileservice.createFile(filename,mimetype, size,id, momentId)
            ctx.body="图片上传完成~"
        }
    }  
}

module.exports = new FileController();