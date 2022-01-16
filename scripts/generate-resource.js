/* eslint-disable no-console */
const fs = require("fs");
const { toPascalCase, toKebabCase } = require("js-convert-case");

const CURR_DIR = process.cwd();
const TEMPLATES_PATH = `${CURR_DIR}/resource-templates`;
const TEMPLATE_TEXT = "__Example__";
const TEMPLATE_FILE_PREFIX = "example";

// get the resource name
let resourceName = process.argv.slice(2)[0]?.trim();

if (!resourceName) {
  console.error("Resource name is required!");
  process.exit(1);
}

// only allow letters and numbers for resource name
if (!/^([A-Za-z\-\d])+$/.test(resourceName)) {
  console.error("Resource name may only include letters, and numbers!");
  process.exit(1);
}

console.log("CWD", CURR_DIR);

resourceName = toKebabCase(resourceName);

console.log("Creating resource 🚀", resourceName);

const resourcePath = `${CURR_DIR}/src/components/${resourceName}`;

console.log(`Creating resource directory for ${resourceName}`);
fs.mkdirSync(resourcePath);

console.log("Creating resource file inside", resourcePath);

// read templates file
const templateFiles = fs.readdirSync(TEMPLATES_PATH);

templateFiles.forEach((templateFile) => {
  const templateFilePath = `${TEMPLATES_PATH}/${templateFile}`;

  // get stats about the current file
  const stats = fs.statSync(templateFilePath);

  if (stats.isFile()) {
    let contents = fs.readFileSync(templateFilePath, "utf8");

    if (contents.indexOf(TEMPLATE_TEXT) > 0) {
      contents = contents.replaceAll(TEMPLATE_TEXT, toPascalCase(resourceName));
    }
    const newFilename = templateFile.includes(TEMPLATE_FILE_PREFIX)
      ? templateFile.replace(TEMPLATE_FILE_PREFIX, toKebabCase(resourceName))
      : templateFile;

    const writePath = `${resourcePath}/${newFilename}`;
    fs.writeFileSync(writePath, contents, "utf8");
  }
});
