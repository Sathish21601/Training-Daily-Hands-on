/**
 * 7. Write a script that lists the name of the file (the script itself), and folder name within it exists. 
      Use path module's join() method to display the complete path of the parent folder.
      Hint: The string '..' can be joined with the current folder path to get the parent folder path.
 */

const path = require("path");
console.log(
  "Name of the File: ",
  path.basename(
    "C:/Sapient_Training/Node_js_and_express_js/hands_on_exercises/path_module_07/path.js"
  )
);
console.log(
  "Complete Path of Parent Folder: ",
  path.dirname(path.join(__dirname, "path.js"))
);
