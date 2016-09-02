var template = require("./template.js")

var input = process.argv[2]
var parsed = template.utils.consumeInput(input)
switch(parsed.type) {
    case "contract":
    for (var contractName in parsed.content.contracts) {
        console.log(JSON.stringify(JSON.parse(parsed.content.contracts[contractName].interface), null, 4))
    }
    break;
    default:
        console.log("no valid input provided")
    break;
}
