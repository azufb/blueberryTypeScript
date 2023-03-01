// Promiseを使う
const fs = require('fs/promises');

const p = fs.readFile('src/Ch8/sample02.txt', 'utf-8');
p.then((data: any) => {
  console.log(data);
});

// 自分でPromiseオブジェクトを作る
// 3秒後に成功するPromise
const promiseObj = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(100);
  }, 3000);
});

// resolveは、executor関数。非同期処理が終わったら呼び出される。

promiseObj.then((num) => {
  console.log(`結果は${num}`);
});

export {};
