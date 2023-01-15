// クラスの宣言と使用

/*

クラスの用途
→オブジェクトの作成。同じようなプロパティやメソッドを持ったオブジェクトを複数作成したい場合など。
→クラスによって作成されたオブジェクトは、インスタンスと呼ぶ。

クラス宣言
class クラス名 { ... }
インスタンスが持つプロパティなどを規定。

new演算子を用いて、クラスのインスタンスを作成。

プロパティ宣言
プロパティ名: 型 = 式;
式は初期値。
初期値を入れている理由としては、new演算子でインスタンスを作ったときに、プロパティに値が入っている必要があるため。
オプショナルなプロパティや読み取り専用のプロパティを宣言可能。

*/

// 例）nameとageの2つのプロパティを持つUserクラスを宣言。
class User {
    name: string = "";
    age: number = 0;
};

// Userクラスのインスタンス作成
const taro = new User();
console.log(taro.name);
console.log(taro.age);

// プロパティの値を変更
taro.name = 'taro';
taro.age = 24;
console.log(taro.name);
console.log(taro.age);

// メソッドの宣言
/*

メソッドの宣言も行うことが可能。
書き方は、オブジェクトにおける関数のメソッド記法と同じ。

*/

// 例）20歳以上かどうか調べるメソッドと年齢を書き換えるメソッドを宣言してみる。
class User2 {
    name: string = '';
    age: number = 0;

    // 20歳以上かどうか調べるメソッド
    isAdult(): boolean {
        // thisは、呼び出してきたインスタンス自身を示す
        if (this.age >= 20) {
            return true;
        } else {
            return false;
        }
    }

    // 年齢を書き換えるメソッド
    setAge(newAge: number): void {
        this.age = newAge;
    }
};

// User2クラスのインスタンス作成
const hanako = new User2();
console.log(hanako.isAdult());
// 年齢を書き換えるメソッド実行
hanako.setAge(24);
console.log(hanako.isAdult());

// コンストラクタ
/*

コンストラクタは、new演算子でインスタンスを作成する際に呼び出される関数。
インスタンスのプロパティを初期化。引数を受け取ることもできる。
引数を受け取る場合は、new演算子でインスタンス作成するときに、引数を渡す。
読み取り専用プロパティにも初期値代入できる！
→読み取り専用プロパティは、一度オブジェクトを作ってしまうと変更ができないが、コンストラクタは、オブジェクトを作る工程の1つだから。

constructor(引数) {
    this.プロパティ名 = 引数;
}

ただし、以下のようにコンパクトにまとめることもできる。
this.プロパティ名 = 引数という処理が不要になる。TypeScript特有の記述。
constructor(アクセス修飾子 プロパティ名: 型){}

※アクセス修飾子とは、インスタンスから参照できるpublicと、
クラス内でしか利用できないprivate、クラスと継承された子クラスからしか利用できないprotectedの3種類がある。

*/
class User3 {
    // ここで初期値入れる必要なし！
    name: string;
    age: number;

    // コンストラクタで初期化！
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
};

// User3クラスのインスタンス作成。引数は、nameとage。
const yuji = new User3('yuji', 30);
console.log(yuji.name);
console.log(yuji.age);

const yuki = new User3('yuki', 22);
console.log(yuki.name);
console.log(yuki.age);

// 静的プロパティと静的メソッド
/*

そのクラスだけに紐付いており、インスタンスからは利用・参照できない。
staticと頭につけるだけ。

*/
class User4 {
    static adminName: string = 'taro';
    static getAdminUser() {
        return new User4(User4.adminName, 26);
    };

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

console.log(User4.adminName);
const admin = User4.getAdminUser();
console.log(admin.name);
console.log(admin.age);

// クラス式
/*

クラスの宣言方法としては、クラス宣言だけでなく、クラス式もある。
class { ... }
クラス名が不要で、変数に代入する感じ。関数式・アロー関数式みたいな感じ。
ただし、private/protectedのような制限が使えない。

*/
const User5 = class {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// クラス内からしかアクセスできないプロパティ
/*

クラス内からしかアクセスできないプロパティの宣言方法
・アクセス修飾子privateを付ける。TypeScript独自。
privete プロパティ名
・「#」を付ける。最近JavaScriptに追加された。ES2015以上のみ。
#プロパティ名

アクセス修飾子privateは、TypeScript独自機能でコンパイル時の型チェックでのみ有効なため、
コンパイル後はprivateの値も外部から見れてしまう可能性がある。
「#」の場合は、JavaScriptの機能であり、コンパイル後も守られるため、厳格にできる。ただし、バージョンは注意。

*/
class User6 {
    name: string;
    #age: number; // #も含めてプロパティ名になる。

    constructor(name: string, age: number) {
        this.name = name;
        this.#age = age;
    }

    // クラスの内部ではアクセスできる。
    getAge(): number {
        return this.#age;
    }
}

// User6クラスのインスタンスを作成。
const yuko = new User6('yuko', 20);
console.log(yuko.name);
console.log(yuko.getAge());

// 型引数
// クラスも、型引数を持つことができる。
class User7<T extends string | undefined> {
    name: string;
    age: number;
    gender: T;

    constructor(name: string, age: number, gender: T) {
        this.name = name;
        this.age = age;
        this.gender = gender
    }
}

// User7クラスのインスタンスを作成
const matsuo = new User7<string>('matsu0', 28, 'male');
console.log(matsuo.gender);

// 性別を答えたくない人がいるかもしれない
const omatsu = new User7<undefined>('omatsu', 28, undefined);
console.log(omatsu.gender);

export {};