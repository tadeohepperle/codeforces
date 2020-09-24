////////////////////////////////////////////////////
// 4A - A Watermelon
function main() {
  const w = parseInt(readLine());
  console.log(w >= 4 && w % 2 === 0 ? "YES" : "NO");
}

// 1A - Theatre Square
function main() {
  const [m, n, a] = readLine()
    .split(" ")
    .map((e) => parseInt(e));
  console.log(Math.ceil(m / a) * Math.ceil(n / a));
}

// A. Way Too Long Words

function main() {
  const n = parseInt(readLine());
  let warr = [];
  for (let i = 0; i < n; i++) {
    warr.push(readLine());
  }
  warr.forEach((el) => {
    console.log(
      el.length <= 10
        ? el
        : el[0] + (el.length - 2).toString() + el[el.length - 1]
    );
  });
}

// A. Yet Another Two Integers Problem

function main() {
  const t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    let l = readLine()
      .split(" ")
      .map((el) => parseInt(el));
    let [a, b, x, y, n] = l;

    let [small, large] =
      Math.max(a - n, x) < Math.max(b - n, y)
        ? [
            [a, x],
            [b, y],
          ]
        : [
            [b, y],
            [a, x],
          ];
    let rest = Math.max(-(small[0] - small[1] - n), 0);
    small[0] -= n;
    let finalsmall = BigInt(Math.max(small[0], small[1]));
    large[0] -= rest;
    let finallarge = BigInt(Math.max(large[0], large[1]));

    let res = (finalsmall * finallarge).toString();
    console.log(res);
  }
}

// C. Mortal Kombat Tower

function main() {
  const t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    let unused = readLine();
    let bossArr = readLine()
      .split(" ")
      .map((el) => {
        return { a: parseInt(el), p: "" };
      });
    // set first to friend
    bossArr[0].p = "f";
    // set friend everywhere where boss is easy:
    bossArr = bossArr.map((el) => {
      if (el.a === 0) el.p = "f";

      return el;
    });
    // set me everywhere in 2 tiles if I can:
    let meCount = 0;
    for (let i = 0; i < bossArr.length; i++) {
      if (bossArr[i].p == "f") {
        meCount = 0;
        continue;
      } else if (meCount < 2) {
        bossArr[i].p = "m";
        meCount++;
      } else if (meCount >= 2) {
        bossArr[i].p = "f";
        meCount = 0;
      }
    }
    let res = bossArr.reduce(
      (acc, cur) => acc + (cur.a == 1 && cur.p == "f" ? 1 : 0),
      0
    );
    console.log(res);
  }
}

// 	1419D1 - Sage's Birthday (easy version)

function main() {
  let n = parseInt(readLine());

  let numbers = readLine()
    .split(" ")
    .map((el) => parseInt(el));
  /////////////////////////////////////////////

  numbers = numbers.sort((a, b) => a - b);

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
