const fs = require("fs");
const path = require("path");
const item = "squares";
const dirpath = path.resolve(__dirname, "new-data");
const files = fs.readdirSync(dirpath);

const destItem = "circles";
const suffix = "circle-";
const destination = path.resolve(__dirname, "new-data-1", destItem);
files.slice(0,100)
.forEach((file, index) => {
  const srcPath = path.resolve(dirpath, file);
  const destPath = path.resolve(destination, `${suffix}${index}.png`);
  fs.copyFileSync(srcPath, destPath);
});
