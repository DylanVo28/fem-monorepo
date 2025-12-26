"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = require("../source/index.js");
var vitest_1 = require("vitest");
(0, vitest_1.describe)('SeedType', function () {
    (0, vitest_1.it)('exists', function () {
        (0, vitest_1.expect)(index_js_1.SeedType.Corn).toBe('corn');
    });
});
