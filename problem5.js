import inventory from "./inventory.js";
function problemfun5(){
    const carYear=[];
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].car_year>2000){
            carYear.push(inventory[i].car_year);
        }
    }
    return carYear;
}
export default problemfun5;