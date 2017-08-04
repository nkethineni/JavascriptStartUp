import "./index.css"
const numeral = require("numeral");

const courseValue = numeral(1000).format("$0,000");
console.log(`I would pay ${courseValue} for this awesome course!`); // eslint-disable-line no-console
