// 型の絞り込み

const formatNumberOrString = (value: string | number) => {
    // typeof演算子を使った、型の絞り込み。
    // ユニオン型を使用している場合に、渡されてきた値の型によって処理を分ける場合など。
    if (typeof value === 'number') {
        return value.toFixed(3);
    } else {
        return value;
    }
};

console.log(formatNumberOrString(3.14));
console.log(formatNumberOrString('sample'));

export {};