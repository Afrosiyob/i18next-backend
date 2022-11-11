import fs from "fs";

export function readJsonFile(path: string) {
  try {
    const data = fs.readFileSync(process.cwd() + path, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log("Cannot read file : ", error);
    return {};
  }
}

export function jsonReader(filePath: string, cb: Function) {
  fs.readFile(process.cwd() + filePath, "utf-8", (err, fileData) => {
    if (err) {
      return cb;
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (error) {
      return cb && cb(error);
    }
  });
}
