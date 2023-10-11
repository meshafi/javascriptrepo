import inventory from "./inventory.js";
function problemfun6(){
    const carName=[];
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].car_make=="BMW" || inventory[i].car_make=="Audi"){
            carName.push(inventory[i]);
        }
    }
    return carName;
}
export default problemfun6;