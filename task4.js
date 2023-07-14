
function PowerTool(name, power) {
    this.name = name,
        this.power = power,
        this.enabled = false;
}
function Computer(name, power, brand) {
    this.name = name,
    this.power = power,
    this.brand = brand
}
Computer.prototype = new PowerTool();
function Lamp(name, power, model) {
    this.name = name,
    this.power = power,
    this.model = model
}
Lamp.prototype = new PowerTool();
PowerTool.prototype.Enabled = function (power) {
    if (power > 0) {
        console.log(`${power} Вт - прибор включен`);
        this.enabled = true;
    } else {
        console.log(`${power} Вт - прибор выключен`)
    }
}
PowerTool.prototype.getPower = function (power) {
    return this.enabled ? this.power : 0;
}
const computer = new Computer('Computer', 800, 'Lenovo');
const lamp = new Lamp('Lamp', 100, 'Philips');
computer.Enabled(800);
lamp.Enabled(100);
function sum(arr) {
    let result = 0
    arr.forEach((item) => {
        result += item.getPower()
    })
    return result;
}
console.log(`Суммарная потребляемая мощность всех включенных приборов ${sum([computer, lamp])} Вт`)