// クラスの型

/*

クラス宣言
→クラスオブジェクトを作るのと同時に、インスタンスの型を宣言するものである。
new演算子でインスタンスを作ると、そのクラスと同時に作成される型が適用される。
ただし、クラス式では同時に型が作られることはないので、クラス宣言を使う方が良い。

*/

class User {
    name: string = '';
    age: number = 0;

    isAdult(): boolean {
        return this.age >= 20;
    };
};

const taro = new User(); // taroは、User型

// クラスが型引数を持つ場合、インスタンスの型も型引数を持つ
class UserWithTypeArg<T> {
    name: string;
    age: number;
    readonly data: T;

    constructor(name: string, age: number, data: T) {
        this.name = name;
        this.age = age;
        this.data = data;
    }
}

// UserWithTypeArg型は型引数を持つので、インスタンスを作成するときに、型引数を渡す。
const hanako = new UserWithTypeArg<string>('hanako', 24, '追加データ');

// クラスの型
class User2 {
    name: string = '';
    age: number = 0;

    isAdult(): boolean {
        return this.age >= 20;
    };
};

type UserType = new () => User2;

const UserClass: UserType = User2;

const user2 = new UserClass();

// instanceof演算子
/*
instanceof演算子
→オブジェクトがあるクラスのインスタンスかどうかを判断する。

値 instanceof クラスオブジェクト

*/

console.log(hanako instanceof UserWithTypeArg); // true
console.log({} instanceof UserWithTypeArg); // false

export {};