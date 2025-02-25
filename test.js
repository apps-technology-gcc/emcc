const fs = require("fs");
const path = require("path");

const appFolderPath = path.join(__dirname, "app");
const baseUrl = "http://localhost:3000";

const getFoldersWithParentheses = (dir) => {
  let result = [];

  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
      if (item.isDirectory()) {
        const folderPath = path.join(dir, item.name);
        const relativePath = path.relative(appFolderPath, folderPath);

        // Check if page.tsx exists in this directory
        const hasPage = fs.existsSync(path.join(folderPath, "page.tsx"));

        if (hasPage) {
          // Convert path to URL format
          const urlPath = relativePath
            .replace(/\\/g, "/") // Replace Windows backslashes with forward slashes
            .replace(/\([^)]+\)/g, "") // Remove parentheses and their contents
            .replace(/\/+/g, "/") // Replace multiple slashes with single slash
            .toLowerCase(); // Convert to lowercase

          result.push(`${baseUrl}${urlPath}`);
        }

        // Recursively check inside this folder
        result = result.concat(getFoldersWithParentheses(folderPath));
      }
    }
  } catch (err) {
    console.error("Error reading folder:", err);
  }

  return result;
};

const urls = getFoldersWithParentheses(appFolderPath);

console.log("Available URLs:");
urls.forEach((url) => {
  console.log(url);
});
