const photoToJSON = (directoryPath) => {
  var fs = require("fs");
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    toJSON(files); // Array of filenames in the directory
  });
};

const toJSON = (files) => {
  var fs = require("fs");
  let result = [];
  let start = 54;
  for (file of files) {
    let delimited = file.split("_");
    //console.log(delimited);
    let pushObj = {
      id: (start += 1),
      filePath: `/${file}`,
      projType: delimited[1],
      projName: delimited[2],
      photoType: delimited[3],
      photoNum: delimited[4],
    };
    console.log(pushObj);
    result.push(pushObj);
  }
  fs.writeFile("Output.txt", result.join(" "), (err) => {
    if (err) throw err;
  });
};

const filePath =
  "C:\\Users\\14693\\Downloads\\Website Images Batch 2 ren and comp";
photoToJSON(filePath);

console.log("end");
