// 型引数を持つ型(ジェネリック型)
// 型を定義する際に、引数を渡すことができる。
// 型引数は、型名の横に<>で囲って渡す。

type Family<Parent, Child> = {
    mother: Parent;
    father: Parent;
    child: Child;
};

const obj: Family<number, string> = {
    mother: 0,
    father: 100,
    child: '1000'
};

// オプショナルな型引数(省略可能な型引数)
// 型引数で、省略された場合のデフォルトの型を指定することができる。

// 例）型引数Parent3とChild2をオプショナルな引数とする。
// 省略された場合、Animal型が適用される。
type Animal = {
    name: string;
};

type Family2<Parent2 = Animal, Child2 = Animal> = {
    mother: Parent2;
    father: Parent2;
    child: Child2;
};

// 両方省略(Parent2とChild2はAnimal型)
const obj1: Family2 = {
    mother: {
        name: 'aaa'
    },
    father: {
        name: 'bbb'
    },
    child: {
        name: 'ccc'
    }
};

// 型方省略
const obj2: Family2<number> = {
    mother: 0,
    father: 0,
    child: {
        name: 'John'
    }
};

// 通常通りの使い方
const obj3: Family2<number, boolean> = {
    mother: 100,
    father: 1000,
    child: false
};

export {};