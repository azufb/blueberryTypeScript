// 関数の型

// 関数型は、(引数: 引数の型) => 返り値の型のように書く。
// 関数型で、引数の型が定義されている場合、式の引数で型を省略できる。
type FType = (repeatNum: number) => string;
const xRepeat: FType = (num: number): string => 'x'.repeat(num);

// 返り値の型注釈は省略できる。
// 関数型を書くときは、返り値の型が必要。
type GreetingMessageType = (num: number) => void;

const greetingMessage: GreetingMessageType = (num: number) => {
    for (let i = 0; i < num; i++) {
        console.log(`Hello, world: ${i}`);
    }
};

greetingMessage(3);

export {};