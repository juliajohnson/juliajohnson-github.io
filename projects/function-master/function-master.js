function objectValues(obj) {
    var newArr = [];
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
        newArr.push(obj[keys[i]]);
    }
    return newArr;
}
