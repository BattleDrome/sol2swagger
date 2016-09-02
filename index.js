'use strict'
var express = require('express')
var template = require("./template.js")
const opn = require('opn')

// Generator
var exec = require('child_process').exec
var handle

// Args
var input = process.argv[2]
// Flags
var server = contains(process.argv, "-s") || contains(process.argv, "--server")
var portFlag = contains(process.argv, "-p") || contains(process.argv, "--port")
var port = containsAfter(process.argv, "-p") || containsAfter(process.argv, "--port") || process.env.PORT || 4730
var help = contains(process.argv, "-h") || contains(process.argv, "--help")
var generate = contains(process.argv, "-g") || contains(process.argv, "--generate")

if (help || !input) {
  console.log("-s, --server           Serves swagger inside Swagger UI webserver")
  console.log("-p, --port [PORT]      Specifies the port to serve Swagger UI")
  console.log("-f, --file [FILENAME]  Specify where to write the generated swagger file")
  console.log("-h, --help             This menu")
  console.log("-g, --generate         Run the API Generator tool")
  return
}

var parsed = template.utils.consumeInput(input)
var app = express()
app.use('/', express.static(__dirname+'/ui'))

app.get('/swagger', function (req, res) {
  processInput(parsed,function(converted){
    res.json(JSON.parse(converted))
  })
})

if (server) {
  app.listen(port)
  var address = 'http://localhost:' + port
  console.log('API running at ' + address)
  if (generate) {
    runYo()  
  }
  opn(address)
} else {
  processInput(parsed,function(converted){
    console.log(converted)
  })
}

function processInput(parsed, cb) {
  var converted = {}
  switch (parsed.type) {
    case "contract":
      var cnt = 0
      for (var contractName in parsed.content.contracts) {
        var tmpConvert = template.compileFromAbi(
          JSON.parse(parsed.content.contracts[contractName].interface),
          contractName,
          parsed.content.contracts[contractName].bytecode
        )
        if (cnt > 0) {
          //paths
          for (var path in tmpConvert.paths) {
            converted.paths[path] = tmpConvert.paths[path]
          }
          for (var definition in tmpConvert.definitions) {
            converted.definitions[definition] = tmpConvert.definitions[definition]
          }
        } else {
          converted = tmpConvert
        }
        cnt++
      }      
      return cb(JSON.stringify(converted, null, 4))
    case "interface":
      return cb(parsed)
    default:
      return cb("no valid input provided")
  }
}

function contains(haystack, needle){
  return haystack.filter(function(item){
    return item === needle
  }).length > 0
}

function containsAfter(haystack, needle){
  var index = haystack.indexOf(needle)
  if (index > -1 && haystack[index + 1] !== undefined) {
    return haystack[index + 1]
  }
  return false
}

function execute(command, callback){
    handle = exec(command, function(error, stdout, stderr){
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        callback(stdout)
    })
}

function runYo() {
  execute('yo sol2swagger --apiPath out.json --framework express --creatorName "Shannon Code" --email "genecyber@gmail.com" --githubUser genecyber', function (out) {
    console.log(out)
    execute('node server.js', function (out) {
      console.log(out)
    })
  })

  handle.stdout.on('data', function (data) {
    console.log(data.toString())
  })
}


