function concatFunction(arr){
    return arr.reduce((accumulator, currentElement) =>
    acumulator + currentElement,);
}
const result = concatFunction(["v8","bmw","audi","benz"]);
console.log(results);