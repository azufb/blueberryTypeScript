// this

/*
thisとは、自分自身を表すオブジェクト。主にメソッドの中で使われる。

メソッドは、オブジェクトのプロパティに入った、関数オブジェクト。
そのため、メソッドを呼び出すときには、オブジェクトのプロパティを呼び出すときと同じように、
「オブジェクト.メソッド名」で呼び出す。
このメソッドを呼び出したときに、thisが何であるか決まる。thisは、オブジェクトを指す。

「クラスA」があるとする。このクラスAには、メソッドmethodAが定義されている。
↓
newシグネチャでクラスAのインスタンスである「インスタンスA」を作る。
↓
メソッドを呼び出したい。
インスタンスA.methodAで、メソッドmethodAを呼び出す。オブジェクト＝インスタンスA、メソッド名＝methodA。
↓
thisは、呼び出した自分自身(オブジェクト)のことを指す。自分自身とは、インスタンスAである。
*/
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getUserName(): string {
        return this.name;
    }

    filterOlder(userArray: User[]): User[] {
        return userArray.filter((user) => {
            return user.age > this.age
        });
    }
}

const taro = new User('taro', 24); // Userクラスのインスタンスを作成。
console.log(taro); // User { name: 'taro', age: 24 }
console.log(taro.getUserName()); // taro
/* 
getUserNameメソッドを呼び出す。
メソッドの中でthis.nameが返されているが、このthisは、呼び出した自分自身のオブジェクトtaroインスタンスのこと。
つまり、this.nameは、taroインスタンスのnameプロパティにアクセスしている。
*/

// アロー関数におけるthis
/*
アロー関数は、自分自身のthisを持たず、アロー関数の中のthisは、アロー関数の外側のthisと同じ。
つまり、アロー関数の外側のメソッドの呼び出し元(メソッドが属するオブジェクト自分自身)のことになる。
*/

// Userインスタンス作成
const hanako = new User('hanako', 25);
const yuki = new User('yuki', 21);
const rie = new User('rie', 28);
const maki = new User('maki', 27);
const kentaro = new User('kentaro', 18);

const userArrayList: User[] = [yuki, rie, maki, kentaro];
console.log(hanako.filterOlder(userArrayList)); // [ User { name: 'rie', age: 28 }, User { name: 'maki', age: 27 } ]
/*
filterOlderメソッドの中で、アロー関数を利用したfilterメソッドを使用している。
filterメソッドの中で、配列の要素オブジェクトが持つageプロパティの値と、thisが持つageプロパティの値を比較している。
この時のthis(自分自身)とは誰なのか。
この時のthis(自分自身)は、アロー関数を持つメソッドの外側の関数filterOlderのthisを引き継いでいる。
つまり、filterOlderメソッドのthisと同じである。
結果、アロー関数内で利用されているthisの正体は、filterOlderメソッドを呼び出した自分自身、hanakoである。
hanakoのageプロパティと、配列のそれぞれの要素が持つageプロパティを比較して、
hanakoのageプロパティよりも大きい要素を要素とした新しい配列を返している。
*/

export {};