// 変数のスコープと関数
// スコープ=有効範囲

// 関数スコープ
// 関数の中でのみ、有効。
// 関数の中で宣言された変数は、その関数の中でのみ使える。

const sample = 'aaa';

const sampleFunc = (age: number): string => {
    const suffix = '歳'; // 関数スコープ

    const sample = 'bbb'; // 関数の外と内で同じ変数名で定義された場合、内側が優先される。
    console.log(sample); // bbb

    return `${age.toString()}${suffix}`;
};

// すでに定義されているconsoleは、グローバルスコープ。
console.log(sampleFunc(20));

// ブロックスコープ
// ブロック({...})の中でのみ、有効。
// ブロックの中で宣言された変数は、そのブロックの中でのみ使える。

const sampleFunc2 = (age: number): string => {
    const suffix = '歳';

    if (age === 0) {
        const baby = 'バブッ！バブッ！バブー！'; // ブロックスコープ
        return baby;
    } else if (age === 20) {
        const otona = '大人の階段のーぼるー';
        // 名前 'baby' が見つかりません。
        // return baby;
        return otona;
    } else if (age === 65) {
        const retire = '定年までお勤めご苦労さまでした。';
        return retire;
    } else {
        return `${age.toString()}${suffix}`;
    };
};

console.log(sampleFunc2(0));
console.log(sampleFunc2(20));
console.log(sampleFunc2(65));
console.log(sampleFunc2(24));

export {};