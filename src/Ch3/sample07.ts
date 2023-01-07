// Mapオブジェクト

// Objectと似ている、キー・値のペアを持つオブジェクト。
// キーは文字列でないといけないObjectと違い、Mapでは、文字列以外のデータ型でもキーとして使える。

// Map型で、キーと値の型はタプル型で指定。
const map: Map<string, number> = new Map();
// setメソッドで、第1引数にキー、第2引数に値を渡すと、データを追加できる。
map.set('キー', 123);
console.log(map);

// getメソッドで、キーを指定すると、そのキーの値が取得できる。
console.log(map.get('キー'));