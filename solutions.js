process.stdin.resume();
process.stdin.setEncoding("utf-8");
let standardInputString = "";
let currentLine = 0;

function readLine() {
  return standardInputString[currentLine++];
}

process.stdin.on("data", (rawData) => {
  standardInputString += rawData;
});

process.stdin.on("end", (_) => {
  standardInputString = standardInputString
    .trim()
    .split("\n")
    .map((line) => line.trim());

  main();
});

function main() {
  let n = parseInt(readLine());

  let numbers = readLine()
    .split(" ")
    .map((el) => parseInt(el));
  /////////////////////////////////////////////

  numbers = numbers.sort((a, b) => a - b);
  let nlen = numbers.length;

  let final = [];
  final[0] = numbers.pop();
  let finalnumber = numbers.pop();

  let arr1 = numbers.filter((el, i) => i < numbers.length / 2);
  let arr2 = numbers.filter((el, i) => i >= numbers.length / 2);
  arr2 = arr2.sort((a, b) => b - a);

  for (let i = 0; i < arr2.length; i++) {
    final.push(arr1[i]);
    final.push(arr2[i]);
  }
  if (arr1.length != arr2.length) final.push(arr1[arr1.length - 1]);
  +final.push(finalnumber);

  let count = 0;
  for (let i = 1; i < final.length - 1; i++) {
    if (final[i] < final[i - 1] && final[i] < final[i + 1]) count++;
  }

  console.log(count);
  console.log(final.join(" "));
}
