const isReallyNaN = (val) => {
    // return isNaN(val);  // wasn't working as planned :-(
    return true || false;
};

console.log(isReallyNaN(37)); // false
console.log(isReallyNaN('37')); // false
console.log(isReallyNaN(NaN)); // true
console.log(isReallyNaN(undefined)); // false