function outputProfile(obj) {
    if (Object.keys(obj).length == 3) {
        return (
        { male: "彼", female: "彼女" }[obj.gender] + "の名前は"
        + obj.name + "で"
        + obj.age + "歳です");
    }
    return "情報がありません"
}
const taro ={
    name : 'Taro',
    age : 25,
    gender : 'male',
};

// console.log(outputProfile(taro));    //彼の名前はTaroで25歳です

const hanako = {
    name : 'Hanako',
    age : 30,
    gender : 'female',
};

// console.log(outputProfile(hanako));    // 彼女の名前はHanakoで30歳です

const hatena = {
    name: 'hatena',
    age: 20,
};

// console.log(outputProfile(hatena));   //  情報がありません


// お買い物リスト
function combineArray(a, b) {
    const array = [];
    a.forEach(e => {
        array.push(e);
    })
    b.forEach(e => {
        array.push(e);
    })
    return array;
}

// const abc = ["a", "b", "c"];
// const def = ["d", "e", "f"];

// console.log(combineArray(abc, def));    //["a", "b", "c", "d", "e", "f"]

// const gen = ["米", "トイレットペーパー", "ちゅーる", "酒"];
// const yui = ["洗剤", "肉", "ブロッコリー"];

// console.log(combineArray(gen, yui));    // ["米", "トイレットペーパー", "ちゅーる", "酒", "洗剤", "肉", "ブロッコリー"]


// 成績を晒す
function createBadScoreArray(a) {
    const i = a.split(' ');
    const b = [];
    console.log(i.sort(compareFunc));
    for (let a= 0; a < i.length; a++) {
        b.push(parseInt(i[a]));
    }
    return b.join(' ')
}
function compareFunc(a, b) {
    return a - b;
}


// console.log(createBadScoreArray('15 8 9 100 26 1'));    // 1 8 9 15 26 100

// console.log(createBadScoreArray('50 15 89 5 61 2 44'));    // 2 5 15 44 50 61 89


// 特定の文字列を含むか
function containStrings(str1, str2) {
    if (str1.indexOf(str2) == -1) {
        return "false";
    }
    return "true"
}

// const a = "あけましておめでとうございます";
// const b = "おめでとう";

// console.log(containStrings(a, b));    // true

// const c = "Love the life you live. Live the life you love.";
// const d = "best";

// console.log(containStrings(c, d));    // false


// アンケートデータの作成
function createObject(a, b) {
    return { name: a, age: b,};
}

// console.log(createObject('ichiro', 20));    // { name: "ichiro", age: 20, }
// console.log(createObject('momoko', 22));    // { name: "momoko", age: 22, }

// ランダムに挨拶
function randomGreet(a, b, c) {
    return [a, b, c][Math.floor(Math.random() * (3 - 0))];
}
// console.log(randomGreet('おはよう','こんにちは','こんばんは'));   // おはようorこんにちはorこんばんは
// console.log(randomGreet('Hi!','Hello!','Bye!'));   // Hi! or Hello! or Bye!

