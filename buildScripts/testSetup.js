// This file isn't transpile, so must use CommonJs and ES5

// Register babel to tranpile before our test runs
require("babel-register")();

//Disable webpack features that Mocha doesn't understand
require.extensions[".css"] = function(){};
