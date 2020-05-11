"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var selenium_webdriver_1 = require("selenium-webdriver");
var chai_1 = require("chai");
var mocha_webdriver_1 = require("mocha-webdriver");
var futureDate = "2040-12-01";
var oldDate = "2000-12-01";
describe('test_accepted_submit', function () {
    it('checks blocked links after submit', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.timeout(20000);
                        return [4 /*yield*/, mocha_webdriver_1.driver.get("file://" + process.cwd() + "/first.html")];
                    case 1:
                        _c.sent();
                        mocha_webdriver_1.driver.find('input[type=date]').sendKeys(futureDate);
                        return [4 /*yield*/, mocha_webdriver_1.driver.find('input[name=fname]').sendKeys('Albert Einstain')];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, mocha_webdriver_1.driver.find('select[id=departureslist]').sendKeys('Warszawa', selenium_webdriver_1.Key.RETURN)];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, mocha_webdriver_1.driver.find('select[id=arrivals]').sendKeys('London', selenium_webdriver_1.Key.RETURN)];
                    case 4:
                        _c.sent();
                        _a = chai_1.expect;
                        return [4 /*yield*/, (mocha_webdriver_1.driver.find('input[type=submit]')).isEnabled()];
                    case 5:
                        _a.apply(void 0, [_c.sent()]).to.equal(true);
                        _b = chai_1.expect;
                        return [4 /*yield*/, mocha_webdriver_1.driver.find('table_adjust').doClick().then(function () { return true; }, function () { return false; })];
                    case 6:
                        _b.apply(void 0, [_c.sent()]).to.equal(false);
                        return [2 /*return*/];
                }
            });
        });
    });
});
describe('test_submit_button_name', function () {
    it('Check submit button is disabled', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.timeout(20000);
                        return [4 /*yield*/, mocha_webdriver_1.driver.get("file://" + process.cwd() + "/first.html")];
                    case 1:
                        _c.sent();
                        _a = chai_1.expect;
                        return [4 /*yield*/, mocha_webdriver_1.driver.find('select[id=departureslist]').getText()];
                    case 2:
                        _a.apply(void 0, [_c.sent()]).to.include('Warszawa');
                        return [4 /*yield*/, (mocha_webdriver_1.driver.find('input[name=fname]')).sendKeys('Maria Curie')];
                    case 3:
                        _c.sent();
                        _b = chai_1.expect;
                        return [4 /*yield*/, (mocha_webdriver_1.driver.find('input[type=submit]')).isEnabled()];
                    case 4:
                        _b.apply(void 0, [_c.sent()]).to.equal(false);
                        return [2 /*return*/];
                }
            });
        });
    });
});
describe('test_submit_button_without_name', function () {
    it('Check submit button is disabled', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.timeout(20000);
                        return [4 /*yield*/, mocha_webdriver_1.driver.get("file://" + process.cwd() + "/first.html")];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, mocha_webdriver_1.driver.find('select[id=arrivals]').sendKeys('London', selenium_webdriver_1.Key.RETURN)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, mocha_webdriver_1.driver.find('select[id=departureslist]').sendKeys('Warszawa', selenium_webdriver_1.Key.RETURN)];
                    case 3:
                        _b.sent();
                        _a = chai_1.expect;
                        return [4 /*yield*/, (mocha_webdriver_1.driver.find('input[type=submit]')).isEnabled()];
                    case 4:
                        _a.apply(void 0, [_b.sent()]).to.equal(false);
                        return [2 /*return*/];
                }
            });
        });
    });
});
describe('test_blocked_links', function () {
    it('checks blocked links after submit', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.timeout(20000);
                        return [4 /*yield*/, mocha_webdriver_1.driver.get("file://" + process.cwd() + "/first.html")];
                    case 1:
                        _c.sent();
                        mocha_webdriver_1.driver.find('input[type=date]').sendKeys(futureDate);
                        return [4 /*yield*/, mocha_webdriver_1.driver.find('input[name=fname]').sendKeys('Albert Einstain')];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, mocha_webdriver_1.driver.find('select[id=departureslist]').sendKeys('Warszawa', selenium_webdriver_1.Key.RETURN)];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, mocha_webdriver_1.driver.find('select[id=arrivals]').sendKeys('London', selenium_webdriver_1.Key.RETURN)];
                    case 4:
                        _c.sent();
                        _a = chai_1.expect;
                        return [4 /*yield*/, (mocha_webdriver_1.driver.find('input[type=submit]')).isEnabled()];
                    case 5:
                        _a.apply(void 0, [_c.sent()]).to.equal(true);
                        mocha_webdriver_1.driver.find('input[type=submit]').click();
                        _b = chai_1.expect;
                        return [4 /*yield*/, mocha_webdriver_1.driver.find('table_adjust').doClick().then(function () { return true; }, function () { return false; })];
                    case 6:
                        _b.apply(void 0, [_c.sent()]).to.equal(false);
                        return [2 /*return*/];
                }
            });
        });
    });
});
describe('test_submit_button_wrong_name', function () {
    it('Check submit button is disabled', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.timeout(20000);
                        return [4 /*yield*/, mocha_webdriver_1.driver.get("file://" + process.cwd() + "/first.html")];
                    case 1:
                        _b.sent();
                        mocha_webdriver_1.driver.find('input[type=date]').sendKeys(futureDate);
                        return [4 /*yield*/, mocha_webdriver_1.driver.find('select[id=arrivals]').sendKeys('London', selenium_webdriver_1.Key.RETURN)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, mocha_webdriver_1.driver.find('select[id=departureslist]').sendKeys('Warszawa', selenium_webdriver_1.Key.RETURN)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, mocha_webdriver_1.driver.find('input[name=fname]').sendKeys('Albert')];
                    case 4:
                        _b.sent();
                        _a = chai_1.expect;
                        return [4 /*yield*/, (mocha_webdriver_1.driver.find('input[type=submit]')).isEnabled()];
                    case 5:
                        _a.apply(void 0, [_b.sent()]).to.equal(false);
                        return [2 /*return*/];
                }
            });
        });
    });
});
describe('test_submit_button_wrong_date', function () {
    it('Check submit button is disabled', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.timeout(20000);
                        return [4 /*yield*/, mocha_webdriver_1.driver.get("file://" + process.cwd() + "/first.html")];
                    case 1:
                        _b.sent();
                        mocha_webdriver_1.driver.find('input[type=date]').sendKeys(oldDate);
                        return [4 /*yield*/, mocha_webdriver_1.driver.find('select[id=departureslist]').sendKeys('Warszawa', selenium_webdriver_1.Key.RETURN)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, mocha_webdriver_1.driver.find('input[name=fname]').sendKeys('Albert X')];
                    case 3:
                        _b.sent();
                        _a = chai_1.expect;
                        return [4 /*yield*/, (mocha_webdriver_1.driver.find('input[type=submit]')).isEnabled()];
                    case 4:
                        _a.apply(void 0, [_b.sent()]).to.equal(false);
                        return [2 /*return*/];
                }
            });
        });
    });
});
describe('test_disable_submit_when_data_change', function () {
    it('Check submit button is disabled', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.timeout(20000);
                        return [4 /*yield*/, mocha_webdriver_1.driver.get("file://" + process.cwd() + "/first.html")];
                    case 1:
                        _b.sent();
                        mocha_webdriver_1.driver.find('input[type=date]').sendKeys(futureDate);
                        return [4 /*yield*/, mocha_webdriver_1.driver.find('input[name=fname]').sendKeys('Albert Einstain')];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, mocha_webdriver_1.driver.find('select[id=departureslist]').sendKeys('Warszawa', selenium_webdriver_1.Key.RETURN)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, mocha_webdriver_1.driver.find('select[id=arrivals]').sendKeys('London', selenium_webdriver_1.Key.RETURN)];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, mocha_webdriver_1.driver.find('select[id=departureslist]').sendKeys('-', selenium_webdriver_1.Key.RETURN)];
                    case 5:
                        _b.sent();
                        _a = chai_1.expect;
                        return [4 /*yield*/, (mocha_webdriver_1.driver.find('input[type=submit]')).isEnabled()];
                    case 6:
                        _a.apply(void 0, [_b.sent()]).to.equal(false);
                        return [2 /*return*/];
                }
            });
        });
    });
});
