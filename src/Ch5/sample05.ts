// 例外処理

// throw文とエラーオブジェクト
/*
コンパイルエラーで検出できなかった、ランタイムエラーを発生させたい場合には、
まずErrorインスタンスを作成し、エラーを表すオブジェクトを用意する。
そして、エラーを発生させるために、throw文を利用する。
throw 式;で、式のところに作成したErrorインスタンスを入れて、発生させることができる。

エラーを発生させることを、「エラーを投げる」と言う。
*/

const throwError = () => {
    // Errorインスタンスを作成
    const error = new Error('エラーが発生しました！！！！！');

    // エラーを投げる
    throw error;
}

/*console.log("エラーを発生させます");

// エラー発生の関数実行！
throwError();

console.log("エラーを発生させました");*/ // エラー発生により、処理が中断されているので、実行されない。

/*
エラーメッセージとスタックトレース
エラーメッセージは、Errorインスタンス作成時に引数で渡したメッセージ。
スタックトレースは、エラー発生までにプログラムがどのような経過を辿ったのかを示している。
今回の場合、スタックトレース1行目にエラー発生の関数throwErrorが書かれており、関数throwErrorの実行でエラーが発生したということがわかる。

エラーメッセージ：Error: エラーが発生しました！！！！！

スタックトレース：
    at throwError (/Users/Azu/blueberryTypeScript/src/Ch5/sample05.ts:15:19)
    at Object.<anonymous> (/Users/Azu/blueberryTypeScript/src/Ch5/sample05.ts:24:1)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Module.m._compile (/Users/Azu/.npm/_npx/1bf7c3c15bf47d04/node_modules/ts-node/src/index.ts:1618:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Object.require.extensions.<computed> [as .ts] (/Users/Azu/.npm/_npx/1bf7c3c15bf47d04/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at phase4 (/Users/Azu/.npm/_npx/1bf7c3c15bf47d04/node_modules/ts-node/src/bin.ts:649:14)
*/

// 例外をキャッチするtry-catch文
/*
ランタイムエラーが発生しても強制終了してしまわないように、try-catch文を使う。
tryブロックの中で例外が発生した場合に、catchブロックを実行する。

try {
    処理
} catch (err) {
    処理
}
*/

try {
    console.log("エラーを発生させます");
    // エラー発生の関数実行！
    throwError();
    console.log("エラーを発生させました"); // エラーが発生してcatchブロックが実行されるので、こちらは実行されない。
} catch (err) {
    console.log('エラーをキャッチしました');
    console.log(err);
}
console.log('おわり');