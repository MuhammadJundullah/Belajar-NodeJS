const validator = require("validator");
const chalk = require("chalk");
const log = console.log;

// console.log(validator.isEmail("sayidmuhammad15gmail.com"));
// console.log(validator.isCreditCard("232342342", ["visa"]));

// a = chalk.italic.bgBlue.black("Hello World!");
// log(a)

log(chalk`Hello {bgRed World} {blue !}`);
