import {
  ControllerResponse,
  ErrorHandler,
} from "../../utils/customResponse.js";
import BigPromise from "../../utils/bigPromise.js";
import FirebaseAdminService from "../../utils/adminFireBaseService.js";
import { v4 as uuidv4 } from "uuid";
export const uploadFile = BigPromise(async (req, res) => {
  console.log(req.body);
  if (!req.files.file && !req.files.files) {
    return ErrorHandler(res, "Please upload a file", 400);
  }

  const { filePath, metadata, fileName, contentType } = req.body;
  let fileUrl;
  if (req.files.file) {
    const { data } = req.files.file;
    fileUrl = await FirebaseAdminService.uploadFileToStorage(
      filePath ?? "assets",
      data,
      metadata,
      contentType ?? "image/jpeg",
      fileName ?? uuidv4()
    );
  }
  const dataList = req.files.files;
  let fileUrls = [];
  if (dataList) {
    console.log(dataList);

    for (const file of dataList) {
      const { data } = file;
      fileUrls.push(
        await FirebaseAdminService.uploadFileToStorage(
          filePath ?? "assets",
          data,
          metadata,
          contentType ?? "image/jpeg",
          fileName ?? uuidv4()
        )
      );
    }
  }
  return ControllerResponse(
    res,
    200,
    { fileUrl, fileUrls },
    "File uploaded successfully !"
  );
});
