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
var myObject = new MyContainer();
try {
    for (var myObject_1 = __values(myObject), myObject_1_1 = myObject_1.next(); !myObject_1_1.done; myObject_1_1 = myObject_1.next()) {
        var element = myObject_1_1.value;
        console.log(element);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (myObject_1_1 && !myObject_1_1.done && (_a = myObject_1.return)) _a.call(myObject_1);
    }
    finally { if (e_1) throw e_1.error; }
}
var iterator = myObject[Symbol.iterator]();
var iteratorResult = iterator.next();
console.log(iteratorResult.done);
while (!iteratorResult.done) {
    console.log(iteratorResult.value);
    iteratorResult = iterator.next();
}
