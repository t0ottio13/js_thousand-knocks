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

function isPerfectNumber(s) {
    const ans = [];
    const S = s.split(" ");
    let parseS = [];
    S.forEach(e => {
        parseS.push(parseInt(e));
    });
    // ↑ここで問題の数字だけの配列ができた parseS
    const chaser = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                    21,22,23,24,25,26,27,28,29,30];
    parseS.forEach(i => {
        let count = 0;
        chaser.forEach(e => {
            if (i % e == 0) {
                if (i != e) {
                    count = count + e;
                }
            }
        })
        if (count == i) {
            ans.push("perfect");
        } else if (count == i - 1 || count == i +1){
            ans.push("nearly");
        } else {
            ans.push("neither");
        }
    });
    return ans;
}

// ちょっと強引だけど草
// console.log(isPerfectNumber('28 28'));    // perfect nearly neither
// console.log(isPerfectNumber('28 16 777'));    // perfect nearly neither
// console.log(isPerfectNumber('3 4 5 6'));    // neither nearly neither perfect



// 単語のテスト採点
function calculatePoint(s) {
    S = s.split(",");
    let point = 0;
    for (let i = 0; i < S.length; i++) {
        let count = 0;
        for (let e = 0; e < S[i].length; e++) {
            if (S[i].split(" ")[0].split("")[e] == S[i].split(" ")[1].split("")[e]) {
            } else {
                count++;
            }
        }
        if (count == 0) {
            point = point +2
        } else if (count == 1) {
            point++;
        } else {}
        }
    return point;
}

// console.log(calculatePoint('apple aple,orange olange,grape glepe,lemon lemon'));    // 3
// console.log(calculatePoint('january januarry,february febrary,march march,april aplil,may may,june june,july jury,august ougust,september septenber,october october,november novembar,december dicembar'));    // 13


// console.log("10" > 5); //true
// console.log( 10 > "5"); //true
// console.log("10" > "5"); //false

// console.log("5" + 5 > 11) //true
// console.log("5" + 5 > "11") //true
// console.log(5 + 5 > "11") //false
// console.log("5" + 5)//55

// 先生の宿題
function getAnswer(s) {
    console.log(s.split(" "));
    // s.split(" ").indexOf("-");
    let result = [];
    S = s.split(" ");
    for (let i = 0; i < S.length; i++) {
        if (parseInt(S[i])) result.push(+S[i]);
    }
    if (S.indexOf("x") > S.indexOf("=")){
        if (S.indexOf("+")!= -1) {
            return result[0] + result[1];
        } else if (S.indexOf("-")!= -1){
            return result[0] - result[1];
        }
    } else {
        if (S.indexOf("x") != 0) {
            if (S.indexOf("+")!= -1) {
                return result[0] + result[1];
            } else if (S.indexOf("-")!= -1){
                return result[0] - result[1];
            }
        } else {
            if (S.indexOf("+")!= -1) {
                return (result[0] - result[1])*-1;
            } else if (S.indexOf("-")!= -1){
                return (result[0] + result[1]);
            }
        }
    }
}

// console.log(getAnswer('1 + 3 = x'));    // 4
// console.log(getAnswer('6 - x = 3'));    // 3
// console.log(getAnswer('x - 1 = 5'));    // 6
// console.log(getAnswer('x + 1 = 5'));    // 4]



// console.log(parseInt(abe));
// console.log(+abe);
// console.log(abe);

// だめだったやつ
// const abe = "abesnn";
// console.log(abe.length);
// function hoge () {
//     return abe == "abesan" ? abe.length==6 ? "abe1" : "abe2" : "abe3";
// }
// 条件１：abe > 4
// 条件２：abe < 3

// 条件１と条件２ 両方満たすと abe
// 条件１と条件２ どちらか満たすと abe2
// 条件１と条件２ どちらも満たさない abe3

// console.log(hoge());


// ショートハンド if else if
// 'use strict';
// {
//   const abe = 5;
//   function hoge() {
//     return abe == 5 ? '5です' : abe == 4 ? '4です' :'それ意外';
//   }
//   console.log(hoge());
// }
// if文の結果にif文を入れている。



// アニメの時間
function formatHour(s) {
    S = s.split(" ");
    let before_hour = S[1].split(":")[0];
    let before_day = S[0].split("/")[1]
    let add_day = Math.floor(before_hour / 24);
    let after_day = (+before_day + (+add_day));
    let after_hour = (+before_hour - (24 * (+add_day)));
    return [[S[0].split("/")[0], after_day].join("/"),
    ([('0' + after_hour).split(-2), S[1].split(":")[1]].join(":"))].join(" ");
}

// console.log(formatHour('01/27 24:30'));    // 01/28 00:30
// console.log(formatHour('02/31 73:59'));    // 02/34 01:59
// console.log(formatHour('12/31 00:00'));    // 12/31 00:00
// console.log(formatHour('12/31 25:01'));    // 12/32 01:01


// console.log(["チョキ", "ぐー", "パー"][~~(Math.random() * 3)]);

// コーヒー割引キャンペーン

function getCostForFreeCoffee(s) {
    S = s.split(" ");
    let total = +S[0];
    let discount = (~~(total * (S[1]) / 100));
    while (S[0] > discount) {
        console.log(discount);
        total = total + (S[0] - discount);
        discount = discount + (~~(S[0] - discount * (S[1]) / 100));
        console.log(~~(S[0] - discount * (S[1]) / 100));
        console.log(discount);
    };
    // 途中
    return total;
}

console.log(getCostForFreeCoffee('300 50'));    // 596
// console.log(getCostForFreeCoffee('1000 99'));    // 1010
