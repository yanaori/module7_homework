function argumentStringObject(str, obj) {
    return obj.hasOwnProperty(str);
}
let person = {
    name: 'Yana',
    age: 34
};

console.log(argumentStringObject('name', person));
console.log(argumentStringObject('surname', person));