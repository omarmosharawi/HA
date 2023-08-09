//Bubble Sort

//Ascending Order
function bSort(bArray){
    let changed=false;
    if(changed==false){
        for(let iii=0; iii<=bArray.length; iii++){
            if(bArray[iii]>bArray[iii+1]){
                let bNum = bArray[iii];
                bArray[iii]=bArray[iii+1];
                bArray[iii+1]=bNum;
                changed=true;
            }
        };
    }
    return bArray.sort((a,b)=>a-b);
}

let isSorted=bSort([7,3,5,10,1]);
console.log(isSorted);
