function sum() {
    let resultSum = 0;
    for (let i = 0; i < arguments.length; i++) {
        resultSum += arguments[i];
    }
    return resultSum;
}

function sum(...args) {
    let resultSum = 0;
    for (let i = 0; i < args.length; i++) {
        resultSum += args[i];
    }
    return resultSum;
}

Function.prototype.myBind = function(context) {
    const that = this;
    const myArgs = Array.from(arguments).slice(1);
    return function _boundFunc() {
        return that.apply(context, myArgs);
    }
}