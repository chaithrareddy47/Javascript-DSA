let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";

let start = 64 + n - i;
  for (let j = 0; j <= i; j++) {
    row = row + String.fromCharCode(start + j) + " ";
}
  console.log(row);
}
