// 関数を作る

// 関数宣言
// function 関数名(引数: 引数の型): 返り値の型 { 処理 }
// 関数宣言は巻き上げの挙動を持つので、宣言前に利用できてしまう。
console.log(range(1, 5)); // [ 1, 2, 3, 4, 5 ]と返ってくる

function range(min: number, max: number): number[] {
    const result: number[] = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    };
    return result;
};

console.log(range(5, 10));

// 返り値がない関数の関数宣言
// 返り値がない場合の返り値の型は、void型。
// void型の関数でも、処理を中断したい場合の「早期return」は可能。
function helloWorld(n: number): void {
    for (let i = 0; i <= n; i++) {
        console.log(`${i}回目のHello World！`);
    }
};

helloWorld(3);

// 関数式
// const 変数 = function (引数: 型): 返り値の型 { 中身 }
// BMIを求める。小数点第2位まで表示。
type Human = {
    height: number;
    weight: number;
};

const calcBMI = function (human: Human): number {
    const bmi: number = human.weight / human.height ** 2;
    // × 100 をして、小数点を元の値の第2位の直後に持ってくる
    // Math.round()で小数点以下を除く。
    // / 100 をして、小数点を戻す。
    const roundedBmi: number = (Math.round(bmi * 100)) / 100;
    return roundedBmi;
};

const me: Human = {
    height: 1.538,
    weight: 40.3
};

console.log(calcBMI(me));

// アロー関数式
// const 変数 = (引数: 型): 返り値の型 => { 中身 }
// BMI計算の関数をアロー関数で書き換え
const calcBMI2 = (human: Human): number => {
    const bmi: number = human.weight / human.height ** 2;
    const roundedBmi: number = (Math.round(bmi * 100)) / 100;
    return roundedBmi;
};

console.log(calcBMI2(me));

// メソッド記法
// プロパティを定義する記法の1つで、オブジェクトリテラルの中で使う。
// プロパティ名(引数: 型): 返り値の型 { 中身 }
type MethodObj = {
    double(arg: number): number;
}
const methodObj: MethodObj = {
    double(num: number): number {
        return num * 2;
    }
};

// 可変長引数(残余引数)
// 引数を残余引数「...引数」のように配列として渡すことで、複数の引数を渡せる。
const printNumbers = (...numbers: (number | string)[]): void => {
    for (const num of numbers) {
        if (typeof num === 'string') {
            console.log(`文字列として${num}が入力された`);
        } else {
            console.log(`数値として${num}が入力された`);
        }
    };
};

printNumbers(1, '2', 3, '4', 5, 6);

// オプショナル引数
// オプショナルな引数は、引数の中でも最後に書く。ただし、残余引数がある場合は、残余引数が一番最後。
// デフォルト値の設定も可能。
const printMessage = (name: string, gender: string, age?: number): void => {
    if (age === undefined) {
        console.log(`年齢非公開${gender}の${name}さん、こんにちは。`);
    } else {
        console.log(`${age}歳${gender}の${name}さん、こんにちは。`);
    };
};

printMessage('太郎', '男性', 30);
printMessage('華子', '女性');

// オプショナル引数と残余引数は併用可能。残余引数が一番最後。
const printMessage2 = (name: string, gender: string, age?: number, ...hobbies: string[]): void => {
    let yourHobbies: string = '';
    if (hobbies.length > 1) {
        yourHobbies = hobbies.join('と');
        yourHobbies = `${yourHobbies}なん`
    } else {
        if (hobbies[0]) {
            yourHobbies = hobbies[0];
        } else {
            yourHobbies = 'いつか見つかるといい'
        }
    };

    if (age) {
        console.log(`${age}歳${gender}の${name}さん、こんにちは。趣味は${yourHobbies}ですね〜。`);
    } else {
        console.log(`年齢非公開${gender}の${name}さん、こんにちは。趣味は${yourHobbies}ですね〜。`);
    };
};

printMessage2('太郎', '男性', 30, 'バイク', 'キャンプ');

// オプショナル引数と残余引数併用の場合で、オプショナル引数の値を渡さない場合、残余引数も渡せない。
printMessage2('華子', '女性');

// コールバック関数
// 関数の引数として関数を渡すことができる。実際に、引数として渡される関数のことを関数と呼ぶ。
// 例）配列のメソッドである、mapメソッド
// 配列の各要素に対して、渡されたコールバック関数を実行する。
// コールバック関数を引数として受け取るような関数は、高階関数とも呼ばれる。
type UserType = {
    name: string;
    age: number;
};

const getName = (u: UserType): string => {
    return u.name;
};

const us: UserType[] = [
    {
        name: '太郎',
        age: 20
    },
    {
        name: '華子',
        age: 27
    }
];

const nameList = us.map(getName);
console.log(nameList);

// Mapメソッドの引数コールバック関数は、アロー関数の形式でも受け入れ可能。
const nameListArrow = us.map((u: UserType) => {
    return u.age;
});
console.log(nameListArrow);

// 関数は値の1種であり、値の中でも、オブジェクトの1種。
// そのため、変数に代入したり(関数式)、関数の引数にしたり(コールバック関数)することが可能であることがわかる。