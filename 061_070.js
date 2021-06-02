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
