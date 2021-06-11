function sum() {
    let resultSum = 0;
    for (let i = 0; i < arguments.length; i++) {
        resultSum += arguments[i];
    }
    return resultSum;
}

function sum2(...args) {
    let resultSum = 0;
    for (let i = 0; i < args.length; i++) {
        resultSum += args[i];
    }
    return resultSum;
}

Function.prototype.myBind = function(context) { 
    const that = this; // this refers to the function that you're calling myBind on
    const myArgs = Array.from(arguments).slice(1);
    return function () {
        const callArgs = Array.from(arguments);
        return that.apply(context, myArgs.concat(callArgs));
    }
}

Function.prototype.myBind2 = function(context, ...bindArgs) {
    return (...callArgs) => this.apply(context, bindArgs.concat(callArgs));
}