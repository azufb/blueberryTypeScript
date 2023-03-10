// コールバックによる非同期処理の扱い
//import fs from 'fs';
const fs = require('fs');

/*
コールバック関数は、非同期処理が終わった時に呼び出される関数

非同期処理の関数とは、非同期処理の実行を開始する関数。そのため、完了したことを検知する必要がある。
非同期処理の完了を検知する手段として、コールバック関数を呼び出す。
*/

console.log('1. 読み込みを開始します');
fs.readFile('./sample02.txt', 'utf-8', (data: any) => {
  console.log('3. 読み込みました');
});

console.log('2. 読み込みを開始しました');

// 実行時、以下コメントアウト。
export {};
