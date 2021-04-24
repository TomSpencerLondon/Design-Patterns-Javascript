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
for (var _i = 0, myObject_1 = myObject; _i < myObject_1.length; _i++) {
    var element = myObject_1[_i];
    console.log(element);
}
var iterator = myObject[Symbol.iterator]();
var iteratorResult = iterator.next();
console.log(iteratorResult.done);
while (!iteratorResult.done) {
    console.log(iteratorResult.value);
    iteratorResult = iterator.next();
}
