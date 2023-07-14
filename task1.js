const purchase = {
    name: "lemon",
    color: "yellow",
    taste: "sour",
    amount: "25"
}
const fruit = Object.create(purchase);
fruit.ownName = "banana";
fruit.ownTaste = "sweet";
function valuesAndKeys(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key} - ${obj[key]}`)
        }
    }
}
valuesAndKeys(fruit)