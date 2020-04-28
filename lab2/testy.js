"use strict";
exports.__esModule = true;
var modulfib_1 = require("./modulfib");
var chai_1 = require("chai");
require("mocha");
describe("Fibonacci", function () {
    it("should equal 0 for call with 0", function () {
        chai_1.expect(modulfib_1.fib(0)).to.equal(42);
    });
});
