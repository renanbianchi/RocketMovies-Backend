const fs = require("fs");
const path = require("path");
const avatarConfig = require("../configs/upload");

class DiskStorage {
  async save(file) {
    await fs.promises.rename(
      path.resolve(avatarConfig.TMP_FOLDER, file),
      path.resolve(avatarConfig.UPLOAD_FOLDER, file)
    );
    return file;
  }

  async delete(file) {
    const filepath = path.resolve(avatarConfig.UPLOAD_FOLDER, file);

    try {
      await fs.promises.stat(filepath);
    } catch {
      return;
    }

    await fs.promises.unlink(filepath);
  }
}

module.exports = DiskStorage;
