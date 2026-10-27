let n = 4;
let counter = 1;
for (let i = 0; i < n; i++){
    let row = ""
    for (let j = 0; j < i + 1; j++){
        row = row + counter +" ";
        counter++
    }
    console.log(row);
    
}