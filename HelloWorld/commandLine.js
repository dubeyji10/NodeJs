// Node.js, accept arguments from the command line
// run node commandLine.js name=Abhishek profession=developer
// run node commandLine.js Abhishek developer
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });
  
