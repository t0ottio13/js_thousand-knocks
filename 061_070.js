// トランプ占い

function divinationCheat(s) {
    let count = 0;
    for (let i = 0; i < s.split(' ').length; i++) {
        if (s.split(' ')[0] == "J") {
            count++;
        }
    }
    return c = (count == 2) ? ('J Q') : s;
}

// console.log(divinationCheat('K Q'));    // K Q
// console.log(divinationCheat('J Q'));    // J Q
// console.log(divinationCheat('J J'));    // J Q


// AボタンとBボタン

function placeCount(s) {
    return s.split(' ')[0] - s.split(' ')[1];
}

// console.log(placeCount('3 4'));    // -1
// console.log(placeCount('80 44'));    // 36


// 三倍返し

function deathWhiteDay(n) {
    return (n == 0) ? 1 : n * 3;
}

// console.log(deathWhiteDay(1));    // 3
// console.log(deathWhiteDay(99));    // 297
// console.log(deathWhiteDay(0));    // 1


// Leet文字列
function convertLeet(s) {
    const ans = [];
    const obj = { "A": 4, "E": 3, "G": 6, "I": 1, "O": 0, "S": 5, "Z": 2, };
    for (let i = 0; i < s.split('').length; i++) {
        if (obj[(s.split('')[i])] == undefined) {
            ans.push(s.split('')[i]);
        } else {
            ans.push(obj[(s.split('')[i])]);
        }
    }
    return ans.join("");
}

// console.log(convertLeet('ALANTURING'));    // 4L4NTUR1N6
// console.log(convertLeet('GSACADEMY'));    // 654C4D3MY


// 完全数とほぼ完全数

// function isPerfectNumber(s) {
//     const s2 = s.split(' ');
//     let S = 0;
//     for (let i = 0; i < s2.length; i++) {
//         let N = parseInt(s2[i]);
//         while (N % 2 == 0) {
//             S = S + (N / 2);
//             if((N%2)%2==0){N=N/2}
//             // console.log("N:" + N);
//             // console.log("S:"+S);
//         }
//         while (N % 3 == 0) {
//             S = S + (N / 3);
//             if((N%3)%3==0){N=N/3}
//         }
//         while (N % 5 == 0) {
//             S = S + (N / 5);
//             if((N%5)%5==0){N=N/5}
//         }
//         while (N % 7 == 0) {
//             S = S + (N / 7);
//             if((N%7)%7==0){N=N/7}
//         }
//         console.log("N:" + N);
//             console.log("S:"+S);
//     }
// }

// console.log(isPerfectNumber('28 16 777'));    // perfect nearly neither
console.log(isPerfectNumber('28'));    // perfect nearly neither
// console.log(isPerfectNumber('3 4 5 6'));    // neither nearly neither perfect


