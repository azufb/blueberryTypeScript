// 配列
// TypeScriptにおいて、値は、プリミティブとオブジェクトの2種類。配列は、そのうちのオブジェクトに含まれる。
const arr = [1, 12, 123, 1234, 12345];
console.log(arr[3]);

// 配列に型指定する
// 「要素の型[]」のように指定する。
const numberArray: number[] = [1, 2, 3, 4, 5];
console.log(numberArray);

// ジェネリック型で、配列の型指定をすることも可能。
const genericArray: Array<{
    name: string;
}> = [
    {
        name: '山田'
    },
    {
        name: '岡田'
    },
    {
        name: '島田'
    }
];
console.log(genericArray);

// readonly配列型
// 読み取り専用の配列型なので、変更ができない。

const readonlyArray: readonly string[] = ['あ', 'い', 'う', 'え', 'お'];
console.log(readonlyArray);

for (const str of readonlyArray) {
    console.log(str);
};

for (const member of genericArray) {
    member.name = `${member.name}さま` // オブジェクトはconstで宣言していても変更可能！オブジェクト自体が変わった訳ではない。
    console.log(member);
};

// オブジェクト以外で再代入が必要なデータは、letで宣言。
for (let number of numberArray) {
    number = 100; 
    console.log(number);
};

// タプル型
// 入れることができる要素の数が決まっているが、要素それぞれの型は決めない型。
// 必要な要素の数だけ、それぞれの型を[]の中にカンマ区切りで入れて、指定する。
const tupleArray: [string, number] = ['aaa', 111];
console.log(tupleArray);

// tupleArray.push('bbb');
// pushメソッドで追加はできるが、インデックス番号を使ってアクセスはできない。

// ラベル付きタプル型
// タプル型の1種で、渡す型それぞれに識別子を与えることができる。
// ただし、オブジェクトのように、その識別子をキーのように利用して値にアクセスすることはできない。
const tupleWithLabelArray: [name: string, age: number, test: boolean] = ['太郎', 22, false];
console.log(tupleWithLabelArray);

export {};