// オブジェクトリテラル
const user = {
    name: 'foo',
    age: 24,
};

// 文字列をプロパティ名とすることが可能。
const obj = {
    'foo': 123,
    "bar": 456,
};
console.log('obj.foo:', obj.foo);
console.log('obj["bar"]:', obj['bar']);

obj.bar = 789;

console.log('obj["bar"]2:', obj['bar']);

// 動的なプロパティ
// 決められたプロパティ名ではなく、変数の値をプロパティにできる。
// ただし、プロパティ名は文字列に限る。それ以外の値が変数に入っていれば、文字列に変換される。
const propName = 'fooo!';
const dynamicPropObj = {
    [propName]:'yeah!',
};

console.log('dynamic obj:', dynamicPropObj);
console.log('dynamic prop name:', dynamicPropObj[propName]);

// ネストしたオブジェクトをスプレッド構文でコピー。片方のオブジェクトで別の値を入れると、元のオブジェクトの値も変わってしまう。
const foo = {
    obj: {
        num: 1234
    },
    obj2: 'barrr!'
};
console.log('foo1-1:', foo.obj.num);
console.log('foo1-2:', foo.obj2);
const bar = { ...foo };
console.log('bar1-1:', bar.obj.num);
console.log('bar1-2:', bar.obj2);
bar.obj.num = 0;
bar.obj2 = 'wowowow!';
console.log('foo2-1:', foo.obj.num);
console.log('foo2-2:', foo.obj2);
console.log('bar2-1:', bar.obj.num);
console.log('bar2-2:', bar.obj2);

export {};