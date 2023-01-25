/**
 * 4. Using the built-in os module of Node, do the following
      a. List the number of CPU cores and their details
      b. The total memory (RAM) and free memory. Calculate them in MB and print (1 MB = 
         2^20 bytes).
         Note: The free memory that Node JS gets to see is different from the actual free memory. 
         Refer https://stackoverflow.com/questions/51911849/node-js-os-freemem-do-not-workcorrectly
      c. The username and home directory of the logged-in user
 */

const os = require('os');
console.log("Number of CPU Crores and their Details: \n", os.cpus());
console.log("\nTotal Memory: ", os.totalmem(), `bytes`);
console.log("\nFree Memory: ", os.freemem(), `bytes`);
console.log("\nUserName: ",os.userInfo().username);
console.log("\nHome Directory: ",os.userInfo().homedir);
