// お月見団子
function getNumberOfDango(s) {
    const array = s.split(' ');
    let count = 0;
    array.forEach(e => {
        let i = parseInt(e);
        if (i > 5) {
            count += 5;
        } else {
            count += i;
        }
    })
    return count;
}

// console.log(getNumberOfDango('3 50'));    // 8
// console.log(getNumberOfDango('100 500'));    // 10
// console.log(getNumberOfDango('2 4'));    // 6

// 衣替え
function isReadyForSummer(s) {
    const array = s.split(' ');
    let count = 0;
    array.forEach(e => {
        if (e == "S") {
            count++;
        }
    })
    if (count >= 5) {
        return "OK";
    } else {
        return "NG";
    }
}
// console.log(isReadyForSummer('W W W W W S S S S S'));    // OK
// console.log(isReadyForSummer('S S W W S W W W W W'));    // NG
// console.log(isReadyForSummer('W S S S S S S S S W'));    // OK

// ピラミッドの作り方
function getNumberOfHuman(n) {
    let count = 0;
    for (let i = 0; i < n-1; i++){
        count = count + (n - i);
    }
    return count + 1 ;
}

// console.log(getNumberOfHuman(4));    // 10
// console.log(getNumberOfHuman(10));    // 55
// console.log(getNumberOfHuman(50));    // 1275

// トリックオアトリート
function candyOrChocolate(s) {
    if (s == "candy") {
        return "Thanks!"
    } else if (s == "chocolate") {
        return "Thanks!"
    }return "No!"
}

// console.log(candyOrChocolate('chocolate'));    // Thanks!
// console.log(candyOrChocolate('candy'));    // Thanks!
// console.log(candyOrChocolate('pannacotta'));    // No!

// 11/11
function canParty(s) {
    if (s.split('').length >= 11) {
        return "OK";
    }
    return 11-s.split('').length;
}

// console.log(canParty('11111111111'));    // OK
// console.log(canParty('1111'));    // 7
// console.log(canParty('1111111111111111'));    // OK

// ワインのキャッチコピー
function bestCopy(s) {
    return "Best in " + s;
}

// console.log(bestCopy('a decade'));    // Best in a decade
// console.log(bestCopy('the world'));    // Best in the world
// console.log(bestCopy('history ever'));    // Best in history ever

// ガチャ期待値計算
function probabilityGetSSR(n, t) {
    return Math.floor((((1 - (1 - n / 100) ** t) * 100) * 2 + 1) / 2);
}

// console.log(probabilityGetSSR(1, 100));    // 63
// console.log(probabilityGetSSR(1.5, 70));    // 65
// console.log(probabilityGetSSR(1, 200));    // 87

// 調理計画
function getStartTimeForCook(s, t) {
    S = s.split(":");
    let hour_count = 0;
    let T = t;
    while (T > 60) {
        T -= 60;
        hour_count++;
    }
    let result_hour = S[0] - hour_count;
    if (t - 60 > S[1]) {
        result_hour -= 1;
    }
    let result_minute = 60 - S[1] - T;
    return result_hour + ":" + result_minute;
}

// console.log(getStartTimeForCook('19:00', 90));    // 17:30
// console.log(getStartTimeForCook('20:00', 20));    // 19:40
// console.log(getStartTimeForCook('20:30', 80));    // 19:10


// 仕方ないから全角にしてやるか
function convertToUppercase(s) {
    const array = ["１", "２", "３", "４", "５", "６", "７", "８", "９"];
    const a = [];
    s.split('').forEach(e => {
        a.push(array[parseInt(e) - 1]);
    })
    return a.join('');
}

// console.log(convertToUppercase('1234567'));    // １２３４５６７
// console.log(convertToUppercase('1111111'));    // １１１１１１１
// console.log(convertToUppercase('1145140'));    // １１４５１４０

// リストラ計画
function fireEmployees(employees, fireEmployees) {
    let a = employees;
    fireEmployees.split(' ').forEach(e => {
        a = a.split(e + " ").join('');
        a = a.split(e).join('');
    })
    return a;
}

// console.log(fireEmployees('Jotaro Joseph Avdol Polnareff Tenmei Iggy', 'Avdol Tenmei Iggy'));    // Jotaro Joseph Polnareff
// console.log(fireEmployees('Giorno Bucciarati Abbacchio Mista Narancia Fugo Trish', 'Bucciarati Abbacchio Narancia'));    // Giorno Mista Fugo Trish
// console.log(fireEmployees('Jolyne Ermes Emporio F・F Weather Anasui', 'Jolyne Ermes F・F Weather Anasui'));    // Emporio

