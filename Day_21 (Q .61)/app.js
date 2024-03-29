"use strict";
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Sedan"] = 0] = "Sedan";
    VehicleType[VehicleType["Coupe"] = 1] = "Coupe";
    VehicleType[VehicleType["Bicycle"] = 2] = "Bicycle";
    VehicleType[VehicleType["Cars"] = 3] = "Cars";
    VehicleType[VehicleType["Bus"] = 4] = "Bus";
    VehicleType[VehicleType["MiniMPV"] = 5] = "MiniMPV";
})(VehicleType || (VehicleType = {}));
console.log(VehicleType.Coupe);
