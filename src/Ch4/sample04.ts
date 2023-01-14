// ジェネリクス
// 型引数を受け取る関数(ジェネリック関数)を作る機能
// 関数名<型引数リスト>の形にする。複数の型引数を渡す場合には、カンマで区切る。
// 型引数リストの型引数は、引数リストの中や返り値、関数の中で使用できる。
// 型引数は省略可能。

function repeat<T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    };
    return result;
};

console.log(repeat<string>('a', 5));

// アロー関数版
const repeat2 = <T>(element: T, length: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    };
    return result;
};

console.log(repeat2<number>(0, 5));

// どんな型でも入れれるようになってへん？
// →extends構文の出番！別の方の部分型とすることで入れれる型を制限。

const addMember = <T>(element: T, length: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    };
    return result;
};

// まずは制限せず入れてみる。
const memberSample = {
    hoge: 'hoge',
    fuga: 'fuga',
    hogehoge: 'hogehoge!'
};

console.log(addMember(memberSample, 2));
// 到底メンバーの情報には見えないオブジェクトが入っている
/*
[
  { hoge: 'hoge', fuga: 'fuga', hogehoge: 'hogehoge!' },
  { hoge: 'hoge', fuga: 'fuga', hogehoge: 'hogehoge!' }
]
*/

type PersonType = {
    name: string; 
};
 
const addMember2 = <T extends PersonType>(element: T, length: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    };
    return result;
};

const memberInfoSample = {
    name: 'taro',
    age: 20,
    gender: 'male'
};

// PersonTypet部分型関係にある型の値しか渡せない。
console.log(addMember2(memberInfoSample, 2));

// オブジェクト以外も可能
const addName = <T extends string>(element: T, length: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    };
    return result;
};

console.log(addName<string>('hanako', 3));

export {};