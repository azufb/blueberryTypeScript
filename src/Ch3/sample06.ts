// 分割代入

// オブジェクトの分割代入
type ObjType = {
    foo: string;
    bar: number;
};

const obj: ObjType = {
    foo: 'foo',
    bar: 123
};

// パターン = オブジェクトの形で書く。
// パターンは中カッコで囲う。
const { foo, bar } = obj;
console.log(foo);
console.log(bar);

// 配列の分割代入
// 配列の要素それぞれが代入される。
// パターン = 配列の形で書く。
// パターンは配列のカッコで囲う。
const arry: string[] = ['い', 'ろ', 'は'];
const [indexOne, indexTwo, indexThree] = arry;
console.log(indexOne);
console.log(indexTwo);
console.log(indexThree);

// restパターンでオブジェクトの残りのデータをオブジェクトとして代入
// オブジェクトでも配列でも可能
type SampleObjType = {
    foo: string;
    bar: string;
    baz: number;
    fbz: boolean;
};

const sampleObj: SampleObjType = {
    foo: 'Hello',
    bar: 'Taro',
    baz: 20,
    fbz: true
};

// foo(変数str)にプロパティfooの値が入り、restObjに残りのプロパティがオブジェクトの形で入る。
const { foo: str, ...restObj } = sampleObj;
console.log(str);
console.log(restObj); // { bar: 'Taro', baz: 20, fbz: true }

export {};