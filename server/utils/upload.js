import { GridFsStorage } from "multer-gridfs-storage";
import multer from "multer";

const storage = new GridFsStorage({
  url: process.env.connectionString,

  file: (req, file) => {
    const match = ["image/png", "image/jpeg", "image/jpg"];
    if (match.indexOf(file.mimeType) === -1) {
      return `$${Date.now()}-devHive-${file.originalname}`;
    }
    return {
      bucketName: "photos",
      filename: `${Date.now()}-devHive-${file.originalname}`,
    };
  },
});
export default multer({ storage });
