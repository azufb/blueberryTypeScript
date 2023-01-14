// 力試し

// 処理の一部を関数に切り出すことは、
// 関数という細かい単位に分割されてそれぞれに名前が付けられることで、
// プログラムの見通しが良くなる。
// データの流れがわかりやすくなる。

// 1）次のfor文の中のif文を関数getFizzBuzzStringに切り出す。
/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    };
};
*/

const getFizzBuzzString = (number: number): string => {
    const dividedByThree: number = 3;
    const dividedByFive: number = 5;

    if (number % dividedByThree === 0 && number % dividedByFive === 0) {
        return 'FizzBuzz';
    } else if (number % dividedByThree === 0) {
        return 'Fizz';
    } else if (number % dividedByFive === 0) {
        return 'Buzz';
    } else {
        return number.toString();
    };
};

for (let i = 1; i <= 100; i++) {
    const message: string = getFizzBuzzString(i);

    console.log(message);
};

// 2）数字のみを要素として持つ配列を返す関数sequenceを作る。
// 開始と終了の数値は引数で指定する。
const sequence = (startNum: number, endNum: number): number[] => {
    const numbers: number[] = [];

    for (let i = startNum; i <= endNum; i++) {
        numbers.push(i);
    };

    return numbers;
};

for (const number of sequence(1, 100)) {
    const message: string = getFizzBuzzString(number);

    console.log(message);
};

// 3）コールバック関数であるmap関数を自分で作成してみる。
type CallBackType = (elm: number) => number;
function map(array: number[], callback: CallBackType): number[] {
    /* ここを埋める */
    const resultArray: number[] = [];
    
    for (const number of array) {
        resultArray.push(callback(number));
    };

    return resultArray;
};

const data: number[] = [1, 1, 2, 3, 5, 8, 13];
// 配列dataの要素それぞれを10倍にした値を要素とする配列を取得したい。
const result: number[] = map(data, (x) => x * 10);
console.log(result);

// 4）上のコールバック関数で、配列の型をジェネリクスを使ってどんな配列でも渡せるようにする。
type CallBackGeneType = <T>(ele: T) => T | boolean;
function map2<T>(array: T[], callback: CallBackGeneType): T[] {
    /* ここを埋める */
    const resultArray: T[] = [];
    
    for (const elm of array) {
        const result: T | boolean = callback(elm);
        if (typeof result === 'boolean') {
            if (result) {
                resultArray.push(elm);
            }
        } else {
            resultArray.push(result);
        }
    };

    return resultArray;
};

const sampleData1: string[] = ['あ', 'い', 'う', 'あ', 'え', 'い', 'お', 'あ'];
const result1: string[] = map2<string>(sampleData1, (data) => data === 'あ' || data === 'い');
console.log(result1);
const sampleData2: number[] = [1, 2, 1, 4, 5];
const result2: number[] = map2<number>(sampleData2, (data) => data === 1);
console.log(result2);