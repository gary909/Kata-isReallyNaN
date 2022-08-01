const isReallyNaN = (val) => {
    if (Number.isNaN(val) == false) {
        return false;
    } else {
        return true;
    }
};

console.log(isReallyNaN(37)); // false
console.log(isReallyNaN('37')); // false
console.log(isReallyNaN(NaN)); // true
console.log(isReallyNaN(undefined)); // false