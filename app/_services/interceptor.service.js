"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var InterceptorService = (function (_super) {
    __extends(InterceptorService, _super);
    function InterceptorService(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    InterceptorService.prototype.request = function (url, options) {
        console.log('My new request...');
        return _super.prototype.request.call(this, url, options);
    };
    InterceptorService.prototype.get = function (url, options) {
        console.log('My new get...');
        return _super.prototype.get.call(this, url, options);
    };
    return InterceptorService;
}(http_1.Http));
exports.InterceptorService = InterceptorService;
//# sourceMappingURL=interceptor.service.js.map