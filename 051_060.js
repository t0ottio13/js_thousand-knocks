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


// // 成績を晒す
// function createBadScoreArray(a) {
//     let array = a.split(' ');
//     array.sort(function(first, second){
//     if (first > second){
//         return 1;
//     }else if (first < second){
//         return -1;
//     }else{
//         return 0;
//     }
//     });
//     console.log(array);
// }

// 配列名.sort()
// 配列名.sort( コールバック関数(一つ目の要素, 二つ目の要素) )

// console.log(createBadScoreArray('15 8 9 100 26 1'));    // 1 8 9 15 26 100

// console.log(createBadScoreArray('50 15 89 5 61 2 44'));    // 2 5 15 44 50 61 89
