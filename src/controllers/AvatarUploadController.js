const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");
const AppError = require("../utils/AppError");
const uploadAvatar = require("../configs/upload");

class AvatarUploadController {
  async upload(request, response) {
    const user_id = request.user.id;

    const file = request.file;

    const diskStorage = new DiskStorage();

    const user = await knex("users").where({ id: user_id }).first();

    if (!user) {
      throw new AppError(
        "Usuário precisa estar autenticado para alterar o avatar",
        401
      );
    }

    if (!file) {
      throw new AppError("Avatar não encontrado", 400);
    }

    if (user.avatar) {
      await diskStorage.delete(user.avatar);
    }

    const filename = await diskStorage.save(file.filename);
    user.avatar = filename;

    await knex("users").update(user).where({ id: user_id });

    response.status(200).json({ "Deu boa cachorro": true });
  }
}

module.exports = AvatarUploadController;
