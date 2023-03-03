// async/await構文

// async関数を作ってみる
// asyncの返り値は、必ずPromise。
async function get3(): Promise<number> {
  // return文で返された値が、Promiseの結果。
  return 3;
}

// console出力の順番を見てみる
/*const outputConsoleAsync = async (): Promise<string> => {
  console.log('関数outputConsoleAsyncが呼び出されました！'); // ②
  return 'outputConsoleAsync';
};

console.log('関数outputConsoleAsyncを呼び出します。'); // ①
const p = outputConsoleAsync(); // 関数outputConsoleAsyncが呼び出されました！
p.then((str) => {
  console.log(`「${str}」と返ってきました。`); // ④
});
console.log('関数outputConsoleAsyncを呼び出しました。'); // ③*/

// Promiseの解決に伴うコールバック関数の実行は非同期的に行われる。
// プログラムを上から下に辿っている途中に割り込むことはできない。

// await式は、Promiseの結果が出るまで待つ。
const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};

async function get5(): Promise<number> {
  console.log('get5が呼び出されました。'); // ②
  // 3秒待つ
  await sleep(3000); // ここでawaitが出てきたので、一旦get5関数は中断。③のconsole出力が先に実行される。
  console.log('awaitの次に進みました。'); // ④3秒経過後に表示。
  return 5;
}

console.log('今から、get5を呼び出します。'); // ①
const q = get5();
q.then((num) => {
  console.log(`num is ${num}`); // ⑥
});
console.log('get5を呼び出しました！'); // ③

export {};
