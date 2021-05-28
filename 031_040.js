// 本棚選び
function canStoreBooks(s) {
    const a = s.split(' ');
    if (a[0] < a[1] * a[2]) {
        return 'OK';
    } else {
        return 'NG';
    }
}
// console.log(canStoreBooks('400 5 85'));    // OK
// console.log(canStoreBooks('500 4 70'));    // NG

// 試合の回数
function calculateNumberOfGames(n) {
    let a = 0;
    for (let i = 0; i < n-1; i++){
        a = a +  n - 1 - i;
    }
    return a;
}

// console.log(calculateNumberOfGames(4));    // 6
// console.log(calculateNumberOfGames(10));    // 45

// 連休の天気
function daysOfGoOut(s) {
    let out_day = 0;
    for (let i = 0; i < s.split(' ').length; i++) {
        if (s.split(' ')[i] < 31) {
            out_day++;
        }
    }
    return out_day;
}

// console.log(daysOfGoOut('13 0 15 30 89 100 30'));    // 5
// console.log(daysOfGoOut('0 14 18 22 0 2 4'));    // 7
// console.log(daysOfGoOut('99 99 99 99 99 99 99'));    // 0


// 正三角形かどうか
function isEquilateralTriangle(s) {
    a = s.split(' ');
    if (a[0] == a[1]) {
        if (a[0] == a[2]) {
            return "yes";
        }
    }
    return "no";

}

// console.log(isEquilateralTriangle('10 10 10'));    // yes
// console.log(isEquilateralTriangle('3 4 5'));    // No

// 天気の表示
function showWeather(n) {
    if (n <= 30) {
        return "sunny";
    }else if(n <= 70) {
        return "cloudy";
    } else {
        return "rainy";
    }
}

// console.log(showWeather(31));    // cloudy
// console.log(showWeather(2));    // sunny
// console.log(showWeather(71));    // rainy


// はじめまして

function greet(s1, s2) {
    return "Hi, " + { M: "Mr.", F: "Ms." }[s2] + s1;
}

// console.log(greet('Stroheim', 'M'));    // Hi, Mr.Stroheim
// console.log(greet('Trish', 'F'));    // Hi, Ms.Trish


// 通知表

function convertNumberToAlphabet(s) {
    const ans = [];
    s.split('').forEach(e => {
        ans.push(["E", "D", "C", "B", "A"][e - 1]);
    });
    return ans.join('');
}

// console.log(convertNumberToAlphabet('53342'));    // ACCBD
// console.log(convertNumberToAlphabet('22222'));    // DDDDD
// console.log(convertNumberToAlphabet('51111'));    // AEEEE


// 不思議なタマゴ
function getNumberOfSteps(s) {
    S = s.split(" ");
    let max = parseInt(S[0]);
    console.log(S);
    for (let i = 0; i < S.length ; i++) {
        a = parseInt(S[i])
        if (max < a) {
            max = a;
        } else {}
    }
    return max;
}

// console.log(getNumberOfSteps('1 2 5'));    // 5
// console.log(getNumberOfSteps('2 5 5'));    // 5
// console.log(getNumberOfSteps('1 2 1'));    // 2


// 台風の感覚
function getInterval(s) {
    const array = [];
    console.log(array);
    for (let i = 0; i < s.split(' ').length-1; i++){
        array.push(s.split(' ')[i+1] - s.split(' ')[i])
    } return array.join(' ');
}

// console.log(getInterval('5 8 19 25 31'));    // 3 11 6 6
// console.log(getInterval('2 3 7 9 28'));    // 1 4 2 19

// ◯◯の秋
function getAutumn(s) {
    return s.split('noaki').join('');
}

// console.log(getAutumn('codenoaki'));    // code
// console.log(getAutumn('dokusyo'));    // dokusyo
// console.log(getAutumn('javascriptnoaki'));    // javascript


