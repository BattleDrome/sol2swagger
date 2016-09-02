var template = require("../template.js")
var abi = require("../data/token.abi.json")
var swagger = require("../data/token.swagger.json")
var chai = require('chai')
var chaiJsonEqual = require('chai-json-equal')
    chai.use(chaiJsonEqual)
var expect = chai.expect

var helper = {
    contract: {
        simple: {
            "name": "simple",
            "solidity_interface": "contract x{function g();}",
            "interface": "[{\"constant\":false,\"inputs\":[],\"name\":\"g\",\"outputs\":[],\"type\":\"function\"}]\n",
            "bytecode": "6060604052601e8060106000396000f3606060405260e060020a6000350463e2179b8e8114601a575b005b601856"
        }
    },
    abi: {
        function: {
            withoutInputs: {
                "constant": true,
                "inputs": [

                ],
                "name": "name",
                "outputs": [
                    {
                        "name": "name",
                        "type": "bytes32"
                    }
                ],
                "type": "function"
            },
            withSingleInput: {
                "constant": true,
                "inputs": [
                    {
                        "name": "from",
                        "type": "address"
                    }
                ],
                "name": "set_name",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "type": "function"
            },
            withoutOutputs: {
                "constant": false,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "mint",
                "outputs": [

                ],
                "type": "function"
            },
            withOutputsAndInputs: {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_amount",
                        "type": "bytes32"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "balance",
                        "type": "uint256"
                    }
                ],
                "type": "function"
            }
        },
        functions: {
            multipleValid: [
                {
                    "constant": true,
                    "inputs": [

                    ],
                    "name": "name",
                    "outputs": [
                        {
                            "name": "name",
                            "type": "bytes32"
                        }
                    ],
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "from"
                        }
                    ],
                    "name": "set_name",
                    "outputs": [
                        {
                            "name": "success",
                            "type": "bool"
                        }
                    ],
                    "type": "function"
                }],
            multipleWithInvalid: [
                {
                    "constant": true,
                    "inputs": [

                    ],
                    "name": "name",
                    "outputs": [
                        {
                            "name": "name",
                            "type": "bytes32"
                        }
                    ],
                    "type": "function"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "_from",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "name": "Transfer",
                    "type": "event"
                }]
        },
        event: {
            withSingleInput: {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256"
                    }],
                "name": "Transfer",
                "type": "event"
            },
            withMultipleInputs: {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "Approved",
                "type": "event"
            }
        },
        events: {
            withMultipleInputs: [{
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "Approved",
                "type": "event"
            }, {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "_owner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "_spender",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "name": "Denied",
                    "type": "event"
                }]
        },
        fullToken: abi,
        base: {
            empty: () => {
                return {
                    "paths": {},
                    "definitions": {},
                    "swagger": "2.0",
                    "info": {
                        "version": "1.0.0",
                        "title": "Generated API (sol2swagger)",
                        "description": "Swagger API generated by sol2swagger",
                        "contact": {
                            "name": "Shannon Code",
                            "email": "shannon@loyyal.com",
                            "url": "http://loyyal.com"
                        }
                    },
                    "schemes": ["http", "https"],
                    "host": "localhost:8545",
                    "basePath": "/v1",
                    "consumes": ["application/json"],
                    "produces": ["application/json"]
                }
            },
            versioned: function (version) {
                return {
                    "paths": {},
                    "definitions": {},
                    "swagger": "2.0",
                    "info": {
                        "version": "1.0.0",
                        "title": "Generated API (sol2swagger)",
                        "description": "Swagger API generated by sol2swagger",
                        "contact": {
                            "name": "Shannon Code",
                            "email": "shannon@loyyal.com",
                            "url": "http://loyyal.com"
                        }
                    },
                    "schemes": ["http", "https"],
                    "host": "localhost:8545",
                    "basePath": "/v" + version.split('.')[0] || 1,
                    "consumes": ["application/json"],
                    "produces": ["application/json"]
                }
            }
        }
    },
    swagger: {
        fullToken: swagger,
        simple: {},
        simpleWithBytecode: {
            "paths": {
                "/simple/deploy": {
                    "post": {
                        "tags": [
                            "simple"
                        ],
                        "summary": "post deploy",
                        "description": "deploys the following bytecode 6060604052601e8060106000396000f3606060405260e060020a6000350463e2179b8e8114601a575b005b601856",
                        "parameters": [

                        ],
                        "responses": {
                            "200": {
                                "description": "200 ok",
                                "schema": {
                                    "properties": {
                                        "address": {
                                            "type":"string",
                                            "x-contractType":"address" 
                                        }
                                    }
                                }
                            }
                        },
                        "deprecated": false
                    }
                },
                "/simple/g": {
                    "get": {
                        "tags": [
                            "simple"
                        ],
                        "summary": "get g",
                        "parameters": [

                        ],
                        "responses": {
                            "200": {
                                "description": "200 ok",
                                "schema": {
                                    "properties": {

                                    }
                                }
                            }
                        },
                        "deprecated": false
                    }
                }
            },
            "definitions": {

            },
            "swagger": "2.0",
            "info": {
                "version": "1.0.0",
                "title": "Loyyal Local",
                "x-ibm-name": "loyyal-local",
                "description": "Localized API for interacting with Loyyal",
                "contact": {
                    "name": "Shannon Code",
                    "email": "shannon@loyyal.com",
                    "url": "http:\/\/loyyal.com"
                }
            },
            "schemes": [
                "http",
                "https"
            ],
            "host": "localhost:8545",
            "basePath": "\/v1",
            "consumes": [
                "application\/json"
            ],
            "produces": [
                "application\/json"
            ],
            "x-loyyal-configuration": {

            }
        },
        path: {
            withoutInputs: {
                "/name": {
                    get: {
                        tags: [],
                        summary: "get name",
                        parameters: [],
                        responses: {
                            "200": {
                                description: "200 ok",
                                schema: {
                                    properties: {
                                        "name": {
                                            type: "string",
                                            "x-contractType": "bytes32"
                                        },

                                    }
                                }
                            }
                        },
                        deprecated: false
                    }
                }
            }
        },

        paths: {
            "/name": {
                "get": {
                    "tags": [

                    ],
                    "summary": "get name",
                    "parameters": [

                    ],
                    "responses": {
                        "200": {
                            "description": "200 ok",
                            "schema": {
                                "properties": {
                                    "name": {
                                        "type": "string",
                                        "x-contractType": "bytes32"
                                    }
                                }
                            }
                        }
                    },
                    "deprecated": false
                }
            },
            "/set_name": {
                "get": {
                    "tags": [

                    ],
                    "summary": "get set_name",
                    "parameters": [
                        {
                            "name": "from",
                            "type": "string",
                            "required": true,
                            "in": "query",
                            "default": "",
                            "description": ""
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "200 ok",
                            "schema": {
                                "properties": {
                                    "success": {
                                        "type": "boolean",
                                        "x-contractType": "bool"
                                    }
                                }
                            }
                        }
                    },
                    "deprecated": false
                }
            }
        },
        properties: {
            withOutputsAndInputs: {
                "_owner": {
                    "type": "address"
                },
                "_amount": {
                    "type": "string"
                }
            }
        },
        parameters: {
            withOutputsAndInputs: [
                {
                    "name": "_owner",
                    "type": "string",
                    "required": true,
                    "in": "query",
                    "default": "",
                    "description": "",
                    "x-contractType": "address"
                },
                {
                    "name": "_amount",
                    "type": "string",
                    "required": true,
                    "in": "query",
                    "default": "",
                    "description": "",
                    "x-contractType": "bytes32"
                }]
        },
        definitions: {
            withMultipleInputs: {
                "ApprovedEvent": {
                    "properties": {
                        "_owner": {
                            "type": "string",
                            "x-contractType": "address"
                        },
                        "_spender": {
                            "type": "string",
                            "x-contractType": "address"
                        },
                        "_value": {
                            "type": "string",
                            "x-contractType": "uint256"
                        }
                    }
                },
                "DeniedEvent": {
                    "properties": {
                        "_owner": {
                            "type": "string",
                            "x-contractType": "address"
                        },
                        "_spender": {
                            "type": "string",
                            "x-contractType": "address"
                        },
                        "_value": {
                            "type": "string",
                            "x-contractType": "uint256"
                        }
                    }
                },
            }
        }
    }
}
//Tests
describe('Base generation', () => {
    it('should generate empty base', () => {
        var generated = template.generateBase()
        var toCheck = helper.abi.base.empty()
        //console.log(JSON.stringify(generated,null,4))
        //console.log(JSON.stringify(toCheck,null,4))
        expect(generated).
            to.jsonEqual(toCheck)
    })

    it('should generate versioned base', () => {
        var generated = template.generateBase(null, null, "1.0.0")
        var toCheck = helper.abi.base.versioned("1.0.0")
        //console.log(JSON.stringify(generated,null,4))
        //console.log(JSON.stringify(toCheck,null,4))
        expect(generated).
            to.jsonEqual(toCheck)
    })
})

describe('Path generation', () => {
    it('should throw if provided a event', () => {
        expect(() => { template.pathTemplate("get", helper.abi.event.withSingleInput) }).
            to.throw("Operation provided is not a function")
    })
    it('should throw if provided a string', () => {
        expect(() => { template.pathTemplate("get", "invalid") }).
            to.throw("Operation provided is not a function")
    })
    it('should throw if provided multiple functions', () => {
        expect(() => { template.pathTemplate("get", helper.abi.functions.multipleValid) }).
            to.throw("Operation provided is not a function")
    })
    it('should generate path if provided a valid function', () => {
        var generated = template.pathTemplate("get", helper.abi.function.withoutInputs)
        var toCheck = helper.swagger.path.withoutInputs
        expect(generated).to.jsonEqual(toCheck)
    })
})

describe('Paths generation', () => {
    it('should generate paths if provided multiple functions', () => {
        var generated = template.pathsTemplate("get", helper.abi.functions.multipleValid)
        var toCheck = helper.swagger.paths
        expect(generated.paths).
            to.jsonEqual(toCheck)
    })
    it('should throw if provided multiple functions with one invalid', () => {
        var toCheck = {}
        expect(() => { template.pathsTemplate("get", helper.abi.functions.multipleWithInvalid) }).
            to.throw("Operation provided is not a function")
    })
})

describe('Parameters generation', () => {
    it('should throw if provided empty object', () => {
        expect(() => { template.parametersTemplate({}) }).
            to.throw("Provided object is not a parameter")
    })
    it('should return empty array if provided with zero items', () => {
        expect(template.parametersTemplate(helper.abi.function.withoutInputs.inputs)).
            to.be.empty
    })
    it('should return single parameter array', () => {
        var generated = template.parametersTemplate(helper.abi.function.withSingleInput.inputs)
        expect(generated).
            to.have.length.of.at.most(1)
    })
    it('should return multi parameter array', () => {
        var generated = template.parametersTemplate(helper.abi.function.withOutputsAndInputs.inputs)
        var toCheck = helper.swagger.parameters.withOutputsAndInputs
        expect(generated).
            to.have.length.of.at.least(2)
        expect(generated).to.jsonEqual(toCheck)
    })
})

describe('Property generation', () => {
    it('should throw if provided a non property', () => {
        expect(() => { template.propertyTemplate(helper.abi.event.withSingleInput) }).
            to.throw("Object provided is not a property")
    })
})

describe('Properties generation', () => {
    it('should throw if provided an object', () => {
        expect(() => { template.propertiesTemplate({}) }).
            to.throw("Object provided should be an array")
    })
    it('should return empty array if provided empty object', () => {
        expect(template.propertiesTemplate([])).
            to.be.jsonEqual({ "properties": {} })
    })
})

describe('Definition generation', () => {
    it('should throw if provided an array', () => {
        expect(() => { template.definitionTemplate([]) }).
            to.throw("Object provided should be an object")
    })
})

describe('Definitions generation', () => {
    it('should throw if provided an object', () => {
        expect(() => { template.definitionsTemplate({}) }).
            to.throw("Object provided should be an array")
    })
    it('should generate definitions when provided events', () => {
        var generated = template.definitionsTemplate(helper.abi.events.withMultipleInputs)
        var toCheck = helper.swagger.definitions.withMultipleInputs
        expect(generated.definitions).to.jsonEqual(toCheck)
    })
})

describe('Full Swagger generation', () => {
    it('should throw if provided an object', () => {
        expect(() => { template.compileFromAbi({}) }).
            to.throw("Object provided should be an array (abi compile)")
    })
    it('should generate when provided an abi', () => {
        var generated = template.compileFromAbi(helper.abi.fullToken, "token", "6060604052600160a060020a0333166000908152602081905260409020612710905560e18061002e6000396000f3606060405260e060020a600035046327e235e381146024578063412664ae14603b575b005b607760043560006020819052908152604090205481565b608960043560243573ffffffffffffffffffffffffffffffffffffffff331660009081526020819052604081205482901015609d5750600060db565b60408051918252519081900360200190f35b604080519115158252519081900360200190f35b5073ffffffffffffffffffffffffffffffffffffffff3381166000908152602081905260408082208054859003905591841681522080548201905560015b9291505056")
        var toCheck = helper.swagger.fullToken
        //console.log(JSON.stringify(generated,null,4))
        //console.log(JSON.stringify(toCheck,null,4))
        expect(generated).
            to.jsonEqual(toCheck)
    })
    it('should generate deploy endpoint if provided bytecode and contractname', () => {
        var generated = template.compileFromAbi(helper.abi.fullToken, "token", "6060604052600160a060020a0333166000908152602081905260409020612710905560e18061002e6000396000f3606060405260e060020a600035046327e235e381146024578063412664ae14603b575b005b607760043560006020819052908152604090205481565b608960043560243573ffffffffffffffffffffffffffffffffffffffff331660009081526020819052604081205482901015609d5750600060db565b60408051918252519081900360200190f35b604080519115158252519081900360200190f35b5073ffffffffffffffffffffffffffffffffffffffff3381166000908152602081905260408082208054859003905591841681522080548201905560015b9291505056")
        var toCheck = helper.swagger.fullToken
        //console.log(JSON.stringify(generated,null,4))
        //console.log(JSON.stringify(toCheck,null,4))
        expect(generated).
            to.jsonEqual(toCheck)

    })
})

describe('Determine input',()=> {
    
    it('should recognize a file', ()=> {
        var generated = template.utils.consumeInput("data/string.txt")
        //console.log(generated)
        expect(generated.subtype).
            to.equal("file")
    })
    it('should recognize a non file input', ()=> {
        var generated = template.utils.consumeInput(".123123")
        //console.log(generated)
        expect(generated.type).
            to.equal("string")
    })
    it('should recognize an interface', ()=> {
        var generated = template.utils.consumeInput(helper.abi.fullToken)
        //console.log(generated)
        expect(generated.type).
            to.equal("interface")
    })
    it('should recognize a contract', ()=> {
        var generated = template.utils.consumeInput(helper.contract.simple.solidity_interface)
        //console.log(generated)
        expect(generated.type).
            to.equal("contract")
    })
   it('should recognize a contract from a file', ()=> {
        var generated = template.utils.consumeInput("data/simple.sol")
        //console.log(generated)
        expect(generated.type).
            to.equal("contract")
    })
    it('should recognize an intrface from a file', ()=> {
        var generated = template.utils.consumeInput("data/token.abi.json")
        //console.log(generated)
        expect(generated.type).
            to.equal("interface")
    })
    it('should recognize an string from a file', ()=> {
        var generated = template.utils.consumeInput("data/string.txt")
        //console.log(generated)
        expect(generated.type).
            to.equal("string")
    })
})



