// Type union
// export const useState = () => {
//   let state: number | string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
;
var carState = useState();
carState.setState('Fiat Ram cd 2022');
console.log(carState.getState());
var ageState = useState();
ageState.setState(10);
console.log(ageState.getState());
// ageState.setState('Fiat strada cd 2022');
// console.log(ageState.getState());
function identity(value, message) {
    console.log(value, message);
    return value;
}
console.log(identity(1, "lorem"));
console.log(identity('abc', "ipsum"));
console.log(identity(true, "dolor"));
var IdentityClass = /** @class */ (function () {
    function IdentityClass(value) {
        this.value = value;
    }
    IdentityClass.prototype.getIdentity = function () {
        return this.value;
    };
    return IdentityClass;
}());
var myNumberClass = new IdentityClass(101);
console.log(myNumberClass.getIdentity());
var myStringClass = new IdentityClass('Hello World!');
console.log(myStringClass.getIdentity());
var Car = /** @class */ (function () {
    function Car() {
        this.label = 'Generic Car';
        this.numWheels = 4;
    }
    Car.prototype.horn = function () {
        return "beep bepp!";
    };
    return Car;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = 'Truck';
        _this.numWheels = 18;
        return _this;
    }
    return Truck;
}(Car));
var Vespa = /** @class */ (function (_super) {
    __extends(Vespa, _super);
    function Vespa() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = 'Vespa';
        _this.numWheels = 2;
        return _this;
    }
    return Vespa;
}(Car));
function washCar(car) {
    console.log("Received a ".concat(car.label, " in the car wash"));
    console.log("Cleaning all ".concat(car.numWheels, " tires"));
    console.log('Beeping horn -', car.horn());
    console.log('Returning your car now');
    return car;
}
var myVespa = new Vespa();
washCar(myVespa);
var myTruck = new Truck();
washCar(myTruck);
