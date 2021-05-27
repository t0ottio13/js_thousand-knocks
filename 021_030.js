//  nまでの和
function getSum(n) {
    let count = n;
    let sum = n;
    for (let i = 0; i < n; i++){
        sum = sum + (count - 1);
        count--;
    }
    return sum;
}

// console.log(getSum(10));    // 55
// console.log(getSum(99));    // 4950


// 数字の桁数
function getNumberOfDigits(n) {
    return String(n).split('').length;
}

// console.log(getNumberOfDigits(100));    // 3
// console.log(getNumberOfDigits(114514));    // 6


// サイコロの裏面
function getBackSide(n) {
    return 7 - n;
}

// console.log(getBackSide(1));    // 6
// console.log(getBackSide(3));    // 4


//充電時間
function getTimeUntilFull(n) {
    return 100 - n;
}

// console.log(getTimeUntilFull(70));    // 30
// console.log(getTimeUntilFull(25));    // 75

// 頭文字
function getInitialFromName(s) {
    return ([s.split(' ')[0].split('')[0], s.split(' ')[1].split('')[0]].join('.'));
}

// console.log(getInitialFromName('Dio Brando'));    // D.B
// console.log(getInitialFromName('Pannacotta Fugo'));    // P.F
// console.log(getInitialFromName('Gyro Zeppeli'));    // G.Z

// どれにしようかな
function choiceOfGod(n) {
    const array = [];
    for (let i = 0; i < n; i++){
        array.push(n - i);
    }
    return array[Math.floor(Math.random() * array.length)];
}

// console.log(choiceOfGod(4));    // 1
// console.log(choiceOfGod(3));    // 3


// 日付のデータ
function formatYMD(s) {
    let a = s.split(' ');
    a[0] = ('0000' + a[0]).slice(-4);
    a[1] = ('00' + a[1]).slice(-2);
    a[2] = ('00' + a[2]).slice(-2);
    return a.join('/');
}

// console.log(formatYMD('2021 1 1'));    // 2021/01/01
// console.log(formatYMD('2020 10 10'));    // 2020/10/10
// console.log(formatYMD('794 11 29'));    // 0794/11/29

// あっとマーク
function convertAtToAtMark(s) {
    return s.split('at').join('@');
}

// console.log(convertAtToAtMark('gsatcodeatquantity'));    // gs@code@quantity
// console.log(convertAtToAtMark('atatatjojoatatat'));    // @@@jojo@@@

// 花粉症で辛い
function getNeedBox(m, n) {
    return Math.floor((n / m) + 1);
}

// console.log(getNeedBox(7, 30));    // 5
// console.log(getNeedBox(3, 100));    // 34
// console.log(getNeedBox(7, 5));    // 1


