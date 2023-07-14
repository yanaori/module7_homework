
class PowerTool {
    constructor(name, power) {
        this.name = name,
            this.power = power,
            this.enabled = false;
    }
    Enabled(power) {
        if (power > 0) {
            console.log(`${power} Вт - прибор включен`);
            this.enabled = true;
        } else {
            console.log(`${power} Вт - прибор выключен`)
        }
    }
    getPower(power) {
        return this.enabled ? this.power : 0;
    }
}
class Computer extends PowerTool {
    constructor(brand, name, power) {
        super(name, power);
        this.brand = brand
    }
}
class Lamp extends PowerTool {
    constructor(model, name, power) {
        super(name, power);
        this.model = model
    }
}
function sum(arr) {
    let result = 0
    arr.forEach((item) => {
        result += item.getPower()
    })
    return result;
}
const computer = new Computer('Lenovo', 'Computer', 800);
const lamp = new Lamp('Philips', 'Lamp', 0);
computer.Enabled(800);
lamp.Enabled(0);
console.log(`Суммарная потребляемая мощность всех включенных приборов ${sum([computer, lamp])} Вт`)
