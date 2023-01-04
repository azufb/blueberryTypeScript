// 部分型関係
// 2つの型の互換性を表す概念。

// 例）型FooBarBazは、型FooBarの部分型である
// 型FooBarBazは、型FooBarでもある。
type FooBar = {
    foo: string;
    bar: number;
};

type FooBarBaz = {
    foo: string;
    bar: number;
    baz: boolean;
};

const obj: FooBarBaz = {
    foo: 'hi',
    bar: 1,
    baz: false
};

const obj2: FooBar = obj;

console.log(obj2);
// 型FooBarには、プロパティbazがないため、アクセスできない。
//console.log(typeof obj2.baz);

// プロパティの包含関係
// 例１）型Humanは、型Animalの部分型である
type Animal = {
    age: number;
};

type Human = {
    age: number; // 型Animalに存在するプロパティが全てある。かつ同じ型である。
    name: string;
};

// 例２）型HumanFamilyは、型AnimalFamilyの部分型である
type AnimalFamily = {
    familyName: string;
    mother: Animal;
    father: Animal;
    child: Animal;
};

type HumanFamily = {
    familyName: string;
    mother: Human;
    father: Human;
    child: Human;
};

export {};