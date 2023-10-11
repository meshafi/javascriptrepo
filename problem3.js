import inventory from "./inventory.js";
function problemfun3(){
     const myArray=[];
     for(let i=0;i<inventory.length;i++){
        myArray.push(inventory[i].car_model);     
     }

    for(let i=0;i<myArray.length;i++){
        for(let j=0;j<myArray.length-1;j++){
            if(myArray[j]>myArray[j+1]){
               const temp=myArray[j];
                myArray[j]=myArray[j+1];
                myArray[j+1]=temp;
            }
        }
    }
    return myArray;
}

export default problemfun3;