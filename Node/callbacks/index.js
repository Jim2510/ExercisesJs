const fs = require("fs");

fs.writeFile("file-1.txt", "Hello Nodejs", "utf-8", (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
