
exports.min = function min (array) {
    if ( array == undefined || array.length == 0 ) return 0;

    array.sort((elem1, elem2) => elem1 - elem2);
    return array[0];     
}

exports.max = function max (array) {
    if ( array == undefined || array.length == 0 ) return 0;

    array.sort( (a, b) => b - a );
    return array[0];
}

exports.avg = function avg (array) {
    if ( array == undefined || array.length == 0 ) return 0;

    let sumValuesArr = 0;
    for(let i of array) {
      sumValuesArr += i;
    }

    let averageValueArr = sumValuesArr / array.length
    return averageValueArr;
}
