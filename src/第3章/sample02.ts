// オブジェクトの形で、型を宣言することができる。
const obj: {
    foo: number;
    bar: string;
} = {
    foo: 123,
    bar: 'Hello World!',
};

// type文を使って、オブジェクトの型を作成。
// 型に名前を付ける。
type FooBarObj = {
    foo: number;
    bar: string;
};

const fooBarObj: FooBarObj = {
    foo: 123,
    bar: 'Yeaaaah!'
};

console.log('fooBarObj.foo:', fooBarObj.foo);
console.log('fooBarObj.bar:', fooBarObj.bar);

// type文は、プリミティブ値の型宣言でも使うことができる。
type UserId = string;
const id: UserId = 'azuuu';

console.log('id:', id);
console.log('id:', typeof id);

// interface宣言でオブジェクト型を宣言する
// interface宣言は、オブジェクト型のみ取り扱える。
interface FooBarObj2 {
    foo: number;
    bar: string;
};

const fooBarObj2: FooBarObj2 = {
    foo: 0,
    bar: 'Heeeeey!'
};

console.log('fooBarObj2.foo:', fooBarObj2.foo);
console.log('fooBarObj2.bar:', fooBarObj2.bar);

// インデックスシグネチャ
// 任意のプロパティ名の型を指定できる。プロパティ名を確定する必要はない。
// 動的なプロパティ名のときに、使えそうな手段。
// オブジェクト型向け。
type PriceData = {
    [key: string]: number;
};
const data: PriceData = {
    apple: 220,
    coffee: 120,
    bento: 500
};

data.chicken = 250;

console.log('data.apple:', data.apple);
console.log('data.coffee:', data.coffee);
console.log('data.bento:', data.bento);
console.log('data.chicken:', data.chicken);

// オプショナルなプロパティの宣言
/* 
    通常、オブジェクトの型を宣言すると、含まれるプロパティは必ず使用しないといけないが、
    「?」を使ってオプショナルなプロパティを宣言すると、そのプロパティは使用しなくても良い。
*/
type MyObj = {
    foo: boolean;
    bar: boolean;
    baz?: string;
};

const myObj: MyObj = {
    foo: true,
    bar: false,
};
console.log('myObj:', myObj);

// 読み取り専用プロパティの宣言
// 読み取り専用のプロパティは、再代入ができない。
type MyObj2 = {
    readonly foo: number;
};

const myObj2: MyObj2 = {
    foo: 123
};
console.log('myObj2:', myObj2);


//export {};