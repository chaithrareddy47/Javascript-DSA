let n = 4;
for(let i=0; i<n;i++){
    let row = ""
    for (let k = 0; k < n - i - 1; k ++){
        row = row+"-"
    }
    for(let j=0;j<=i;j++){
        row = row + (String.fromCharCode(65 + j))
        
    }
    for (let j = i - 1; j >= 0; j--){
        row = row + String.fromCharCode(65 + j);
    }

    console.log(row);
    
}