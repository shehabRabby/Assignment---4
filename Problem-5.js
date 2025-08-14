function  resultReport( marks ) {
    
    if(!Array.isArray(marks)){
        return 'Invalid';
    }
    let sum = 0, pass = 0, fail = 0; 

    for(let i of marks){
        sum += i;
    }

    const finalScore = marks.length === 0 ? 0 : Math.round(sum / marks.length);

    for(let i of marks){
        if(i >= 40){
            pass++;
        }else{
            fail++;
        }
    }
    return {finalScore,pass,fail};
}


const arr1 = [99];
console.log(resultReport(arr1));