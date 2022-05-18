const lucene = require("lucene");

const ast = lucene.parse("/hi*/");
console.log(ast);
