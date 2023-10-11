import inventory from "./inventory.js";
function problemfun4(){
    const carYear=[];
    for(let i=0;i<inventory.length;i++){
        carYear.push(inventory[i].car_year);
    }
    return carYear;
}
export default problemfun4;