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

