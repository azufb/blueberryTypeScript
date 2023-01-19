// クラスの継承
// 部分型関係にある複数のオブジェクトを定義したい場合など。
// 親クラスの機能を引き継いだり、上書きしたりできる。

// extends
// class クラス名 extends 親クラス名 {...}

// Userクラスを親クラスとし、PremiumUserクラスを作る。
class User {
    name: string;
    #age: number; // プライベートプロパティ。クラスの中でのみ参照可能。

    constructor(name: string, age: number) {
        this.name = name;
        this.#age = age;
    };

    public isAdult(): boolean {
        return this.#age >= 20;
    };
};

class PremiumUser extends User {
    rank: number = 1;
    // nameは継承されるが、プライベートプロパティの#ageは継承されない。

    public getUserName(): string {
        return this.name;
    };

    // 機能の上書き
    public isAdult(): boolean {
        return true;
    }
};

const taro = new PremiumUser('taro', 33);
console.log(taro.isAdult());
console.log(taro.getUserName());
console.log(taro.rank);

const hanako = new PremiumUser('hanako', 15);
console.log(hanako.isAdult());

class SuperPremiumUser extends User {
    rank: number;

    // コンストラクタをオーバーライド
    constructor(name: string, age: number, rank: number) {
        // super呼び出しをして、親クラスのコンストラクタを呼び出す。
        super(name, age);
        this.rank = rank;
    }
}

const yuki = new SuperPremiumUser('yuki', 25, 10);
console.log(yuki.name);
console.log(yuki.rank);

// クラスの型チェックはimplements
// class クラス名 implements 型 {...}
// 継承の場合は、extendsより後に、implements。
// そのクラスが型の部分型であるということ。

// クラスUser2は、HasName型の部分型である。
type HasName = {
    name: string;
};

class User2 implements HasName {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.#age = age;
    }
}