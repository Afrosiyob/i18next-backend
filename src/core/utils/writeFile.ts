import fs from "fs";

export function writeFile(path: string, data: object) {
  fs.writeFile(process.cwd() + path, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.log(err);
    }
  });
}
