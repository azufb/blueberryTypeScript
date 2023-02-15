// any型とunknown型

/*
any型
→型チェックを無効化する型。
型チェックを無効化してしまうので、どんな変数にどんな型の値を入れてもコンパイルエラーにならない。
※ランタイムエラーは出る。

関数の引数をany型にしてしまうと、TypeScriptの保護が行き届かなくなってしまう。

じゃあ、なんであるの？
・JavaScriptからの移行支援。
→JavaScriptは、型がないTypeScriptと同じ。型注釈がない状態、つまりany型となる。
型注釈を付けたところからanyを解消していく。

・型を上手く表現できない場合のエスケープハッチ。
→できれば、先にasの利用を検討してから、それでもダメだったら使う...という方が良い。
*/

// 例）オブジェクトで初期化している変数objをany型とし、文字列を代入してみる。
let obj: any = {};
console.log(obj); // 空のオブジェクト{}が返ってくる。

obj = 'aaa'; // コンパイルエラーにならない！
console.log(obj); // 代入した文字列aaaが返ってくる！

/*
unknown型
→なんでも入れられる型。anyと似ているが、anyとは違って、操作に制限がかかる。(コンパイルエラーが出る。)
*/

export {};