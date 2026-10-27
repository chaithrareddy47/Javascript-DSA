let n = 4;
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < i + 1; j++){
        row=row+(j+1)
    }
    for (let spaces = 0; spaces < 2 * (n - i - 1); spaces++){
        row = row + "-";
    }

    for (let k = 0; k < i + 1; k++){
        row = row + (i+1-k)
    }
    

    console.log(row);
    
}