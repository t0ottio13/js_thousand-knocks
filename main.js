console.log('hello');

// 数の比較
function compareNumbers(a,b) {
    if (a > b) {
        return a;
    }else if (b > a){
        return b;
    } else {
        return "eq";
    }
}
// console.log(compareNumbers(2, 5));
// console.log(compareNumbers(10, 9));
// console.log(compareNumbers(2, 2));

// 単位の計算
function convertToMm(n, s) {
    const obj = { km: 1000000, m: 1000, cm: 10 }
    return n * obj[s];
}

// console.log(convertToMm(1, 'km'));    // 1000000
// console.log(convertToMm(54, 'km'));   // 54000000
// console.log(convertToMm(2, 'cm'));    // 20

// 偶数か奇数か
function oddOrEven(n) {
    if (n % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}

// console.log(oddOrEven(4));    // even
// console.log(oddOrEven(5));    // odd
// console.log(oddOrEven(2));    // even



// 西暦の計算
function calculateYears(a, b) {
    return b - a;
}

// console.log(calculateYears(1990, 2014));    // 24
// console.log(calculateYears(1999, 2000));    // 1
// console.log(calculateYears(794, 1192));    // 398

// 何番目？
function judgeTh(c) {
    const alf = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let count = 0;
    alf.forEach((i) => {
        if (i == c) {
            count = 0;
        } else {
            count++
        }
    })
    return 26 - count;
}

// console.log(judgeTh('C'));    // 3
// console.log(judgeTh('X'));    // 24



// 絶対値
function getAbs(n) {
    return Math.sqrt(n * n );
}
// console.log(getAbs(-10));    // 10
// console.log(getAbs(15));     // 15
// console.log(getAbs(0));      // 0


// 割り算
function getQuotientAndSurplus(m, n) {
    return (Math.floor(m/n) + " " + m%n)
}
// console.log(getQuotientAndSurplus(10, 3));    // 3 1
// console.log(getQuotientAndSurplus(12, 14));    // 0 12



// // 小文字を大文字に
// function convertToUppercase(s) {
//     const beforeArray = [];
//     const obj = {
//         a: "A", b: "B", c: "C", d: "D", e: "E", f: "F" , g: "G", h: "H", i: "I", j: "J", k: "K", l: "L", m: "M",n: "N",
//         o: "O", p: "P", q: "Q", r: "R", s: "S", t: "T" , u: "U", v: "V", w: "W", x: "X", y: "Y", z:"Z"
//     }
//     S = (s.split(""));
//     alert(S[0]);
//     console.log(S[1]);
//     const afterArray = [];
//     console.log(obj.a);
//     for (let count = 0; count < beforeArray.length; count++) {
//         let font = obj.find(() => {
//             console.log(obj);
//             return obj.S[count];
//         })
//         afterArray.push(font);
//     }
//     // console.log(obj[beforeArray[count]]);
// }

// console.log(convertToUppercase('gsacademy'));    //
// // console.log(convertToUppercase('abcdefghijklmnopqrstuvwxyz'));    // ABCDEFGHIJKLMNOPQRSTUVWXYZ


// 掛け算のリスト

function createList(n) {
    const xNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const answerArray = [];
    for (let i = 0; i < xNumber.length; i++) {
        answerArray.push(n * xNumber[i]);
    }
    return answerArray.join(" ");
}

// console.log(createList(2));    // 2 4 6 8 10 12 14 16 18
// console.log(createList(3));    // 3 6 9 12 15 18 21 24 27
// console.log(createList(5));    // 5 10 15 20 25 30 35 40 45

// 等差数列
function createSequence(m, n) {
    const answer = [];
    for (let i = 0; i < 10; i++) {
        answer.push(n * i + m);
    }
    console.log(answer);
    return answer.join(" ");
}

// console.log(createSequence(3, 3));    // 3 6 9 12 15 18 21 24 27 30
// console.log(createSequence(5, 10));    // 5 15 25 35 45 55 65 75 85 95
// console.log(createSequence(1, 3));    // 1 4 7 10 13 16 19 22 25 28


// カウントダウン
function countDown(n) {
    let count = n;
    const array = [];
    while (count > 0) {
        array.push(count);
        count--;
    }
    return array.join(" ");
}

// console.log(countDown(3));     // 3 2 1
// console.log(countDown(10));    // 10 9 8 7 6 5 4 3 2 1



// N文字目まで出力
function getOneToN(s, n) {
    S = (s.split(""));
    const array = [];
    for (let i = 0; i < n; i++) {
        array.push(S[i]);
    }
    return array.join("");
}

// console.log(getOneToN('aabbccdd', 5));    // aabbc
// console.log(getOneToN('gsacademyfukuoka', 9));    // gsacademy


// // 最大と最小

function getMaxAndMin(s) {
    S = s.split(" ");
    let max = parseInt(S[0]);
    let min = parseInt(S[0]);
    console.log(S);
    for (let i = 0; i < S.length - 1; i++) {
        a = parseInt(S[i])
        if (max < a) {
            max = a;
        } else {}
        if (min > a) {
            min = a
        }else{}
    }
    const array = [];
    array.push(max);
    array.push(min);
    return array.join(" ");
}

// console.log(getMaxAndMin('9 12 3 6 10'));    // 12 3
// console.log(getMaxAndMin('1 1 2 2 3'));    // 3 1
// console.log(getMaxAndMin('5 9 -1 10 2'));    // 10 -1

// 文字列からN番目
function getNthChar(s, n) {
    S = s.split("");
    console.log(S);
    return S[n-1];
}

// console.log(getNthChar('gsacademy', 3));    // a
// console.log(getNthChar('abcdefg', 5));    // e
// console.log(getNthChar('qwertyu', 1));    // q


// 文字列の一致
function isEqual(s, t) {

}

console.log(isEqual('gsacademy', 'gsacademy'));    // Yes
console.log(isEqual('JavaScript', 'ジャバスク'));    // No
console.log(isEqual('aaaaa', 'aaaaaa'));    // No