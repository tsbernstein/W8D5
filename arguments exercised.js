// function sum() {
//     let resultSum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         resultSum += arguments[i];
//     }
//     return resultSum;
// }

// function sum2(...args) {
//     let resultSum = 0;
//     for (let i = 0; i < args.length; i++) {
//         resultSum += args[i];
//     }
//     return resultSum;
// }

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

function curriedSum(numArgs) {
    let numbers = [];
    function _curriedSum(num) {
        numbers.push(num);
        let resultSum = 0;
        if (numbers.length === numArgs){
            numbers.forEach((ele) => resultSum += ele);
            return resultSum;
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}

Function.prototype.curry = function(numArgs){
    const args = [];
    const that = this;
    function _curry(arg) {
        args.push(arg);
        if(args.length === numArgs) {
            return that(...args);
        } else {
            return _curry;
        }
    }
    return _curry;
}

Function.prototype.curry2 = function(numArgs){
    const args = [];
    const that = this;
    function _curry(arg) {
        args.push(arg);
        if(args.length === numArgs) {
            return that.apply(null, args);
        } else {
            return _curry;
        }
    }
    return _curry;
}