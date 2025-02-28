function tribonacci(signature,n){
    if (n == 0) return [];

    let returnArray = [];
    if (n < 3) {
        returnArray = returnArray.concat(signature.slice(0, n));
    }
    else {
        returnArray = returnArray.concat(signature);

        for (let i = 0; i < n - 3; i++) {
            let next = 0;
            signature.forEach(x => {
                next += x;    
            });
            returnArray = returnArray.concat(next);
            signature = returnArray.slice(i+1, i+4);
        }
    }
    return returnArray;
}
export default tribonacci;