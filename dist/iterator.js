"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
var MyContainer = /** @class */ (function () {
    function MyContainer() {
    }
    MyContainer.prototype[Symbol.iterator] = function () {
        var counter = 0;
        return {
            next: function () {
                return {
                    done: counter > 5,
                    value: counter++
                };
            }
        };
    };
    return MyContainer;
}());
// const myObject = new MyContainer();
//
// for (let element of myObject){
//   console.log(element);
// }
//
// let iterator = myObject[Symbol.iterator]();
// let iteratorResult = iterator.next();
// console.log(iteratorResult.done);
//
// while (!iteratorResult.done){
//   console.log(iteratorResult.value);
//   iteratorResult = iterator.next();
// }
var arr = [1, 2, 3, 4];
try {
    for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
        var el = arr_1_1.value;
        console.log(el);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
    }
    finally { if (e_1) throw e_1.error; }
}
