const path = require("path");
const fs = require("fs");

const util = require("util");

const ReadDir = util.promisify(fs.readdir);

const READMEMD_CONTENT = fs
  .readFileSync(path.join(__dirname, "README.md.template"))
  .toString("utf-8");

const WriteFile = util.promisify(fs.writeFile);

(async () => {
  const dir = await ReadDir(__dirname);
  const allMdFile = dir.filter(_ => path.extname(_) === ".md");
  const allMdFileSorted = allMdFile
    .filter(_ => /^\d/.test(_))
    .sort((prev, next) => {
      const numberRegexp = /^(\d+)?\./;
      const [, prevNumber] = prev.match(numberRegexp) || [, -1];
      const [, nextNumber] = next.match(numberRegexp) || [, -1];
      return Math.floor(prevNumber) - Math.floor(nextNumber);
    });
  let actualContent = `
## problem lists
  `;
  for (let item of allMdFileSorted) {
    actualContent += `
  - [${item}](/${item.replace(/\s/g, "%20")})`;
  }
  const README_PATH = path.join(__dirname, "README.md");
  try {
    await WriteFile(
      README_PATH,
      READMEMD_CONTENT.replace("{list}", actualContent)
    );
  } catch (e) {
    console.log(e);
  }
})();
