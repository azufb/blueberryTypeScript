// 力試し

// 以下のオブジェクトと関数で書かれたコードをクラスを使って書き直す
/*type User = {
    name: string;
    age: number;
}

function createUser(name: string, age: number): User {
    if (name === '') {
        throw new Error('名前は空にできません');
    }

    return {
        name,
        age
    };
}

function getMessage(user: User, message: string): string {
    return `${user.name}（${user.age}）「${message}」`;
}

const uhyo = createUser('uhyo', 26);
console.log(getMessage(uhyo, 'こんにちは'));*/

class User {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
        if (name === '') {
            throw new Error('名前は空にできません');
        } else {
            this.name = name;
        };

        this.#age = age;
    };

    getMessage(message: string): string {
        return `${this.name}（${this.#age}）「${message}」`;
    };
}

const uhyo = new User('uhyo', 26);
console.log(uhyo.getMessage('こんにちは'));

// クラスを関数に書き換えてみる
const createUser = (name: string, age: number) => {
    return (message: string) => {
        return `${name}（${age}）「${message}」`;
    };
};

// 関数getMessageの実行では、messageのみを引数として受け取るのに、nameやageのようなデータを持っている。
// このように、関数がデータを持っていることを、クロージャと言う。
const getMessage = createUser('uhyo', 26);
console.log(getMessage('こんにちは'));

/*
クラスが便利な場面＝メソッドを持ったオブジェクトを作る場合

ただ、メソッドを持ったオブジェクトが必要な場面自体が少ない。
そもそも、データを持つオブジェクトと関数を用意して、組み合わせて使えば済んでしまう。
*/

/*
クラスでは、プロパティをプライベートプロパティとし、クラスの外から参照・利用できないようにすることができる。
→カプセル化という。

普通のオブジェクトでは、readonlyを付けただけでは、参照はできてしまう。

例）
class User {
    readonly #name: string;
    readonly #age: number;

    constructor(name: string, age: number) {
        this.#name = name;
        this.#age = age;
    }
}
*/

export {};