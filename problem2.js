import inventory from "./inventory.js";
function problemfun2(){
    return `Last car is ${inventory[inventory.length-1].car_make} ${inventory[inventory.length-1].car_model}`;
}

export default problemfun2;