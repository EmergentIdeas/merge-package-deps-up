require('mocha')
var expect = require('chai').expect
var assert = require('chai').assert
var merge = require('../merge-deps-up')

describe("simple merging", function() {
    it("two files", function() {
        console.log(merge.mergeFiles('./test-files/wh-build.json', './test-files/wh-template.json'))
    })
})