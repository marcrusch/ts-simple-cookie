"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cookie = /** @class */ (function () {
    function Cookie() {
    }
    Cookie.prototype.create = function (key, value, options) {
        if (options === void 0) { options = {}; }
        var params = __spread([
            key + "=" + value
        ], ((options.path && ["path=" + options.path]) || []), ((options.domain && ["domain=" + options.domain]) || []), ((options.maxAge && ["max-age=" + options.maxAge]) || []), ((options.expires && ["expires=" + options.expires]) || []), ((options.secure && ["secure"]) || []), ((options.samesite && ["samesite=" + options.samesite]) || []));
        document.cookie = params.join(";");
    };
    Cookie.prototype.get = function (key) {
        var cookies = this.getAll();
        if (!cookies[key]) {
            return undefined;
        }
        return cookies[key];
    };
    Cookie.prototype.edit = function (key, value, options) {
        if (!this.get(key)) {
            console.warn("Error: Cookie with the name " + key + " does not exist.");
            return false;
        }
        this.create(key, value, options);
        return true;
    };
    Cookie.prototype.delete = function (key) {
        if (!this.get(key)) {
            return false;
        }
        document.cookie = key + "=;max-age=-1";
        return true;
    };
    Cookie.prototype.getAll = function () {
        var cookies = {};
        document.cookie.split(";").forEach(function (pair) {
            var indexOfEquals = pair.trim().indexOf("=");
            var value = pair.trim().substring(indexOfEquals + 1);
            var key = pair.trim().substring(0, indexOfEquals);
            cookies[key] = value;
        });
        return cookies;
    };
    return Cookie;
}());
exports.Cookie = Cookie;
//# sourceMappingURL=Cookie.js.map