let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  let start = 1;
  if (i % 2 == 0) start = 1;
  else start = 0;

  for (let j = 0; j < i + 1; j++) {
    row = row + " "+start +"_" ;
    start = 1 - start;
  }
  console.log(row);
}
