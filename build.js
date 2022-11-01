const sass = require("sass");
const fs = require("fs");

const distDir = "./dist";

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

sass.compileAsync("./scss/lib.scss").then((result) => {
  fs.writeFile("./dist/lib.css", result.css, (err) => {
    if (err) {
      console.error(`Failed to write output`);
    }
  });
});
