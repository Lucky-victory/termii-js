"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    static mergeObj(obj, objs) {
        return Object.apply(obj, objs);
    }
    static isUndefined(val) {
        return typeof val === 'undefined';
    }
    static isFunction(val) {
        return typeof val === 'function';
    }
}
exports.Utils = Utils;
