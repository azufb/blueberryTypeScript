// 力試し

type User = {
    name: string;
    age: number;
    premiumUser: boolean;
};

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

// 変数dataを利用して、User[]型の変数usersを定義する。
console.log(data);
const peopleDataArray: string[] = data.split(/\n/);
console.log(peopleDataArray);

// 必要なデータのみの文字列を要素とする配列を作る。
const removedNullStrPeopleDataArray: string[] = peopleDataArray.filter((data) => {
    return data !== '';
});
console.log(removedNullStrPeopleDataArray);

// 配列から要素を取り出す。
// 取り出した要素はカンマ区切りになっていて、そこから、個人データを取り出す。
// name、age、premiumUserの3つのプロパティを持つオブジェクトを作る。
// 変数usersに配列の要素として格納する。
let users: User[] = [];
for (const personalData of removedNullStrPeopleDataArray) {
    const data: string[] = personalData.split(',');
    console.log(data);

    const user: User = {
        name: data[0],
        age: Number(data[1]),
        premiumUser: Number(data[2]) === 1 ? true : false
    };

    users = [...users, user];
}

for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name}（${user.age}）はプレミアムユーザーです。`);
    } else {
        console.log(`${user.name}（${user.age}）はプレミアムユーザーではありません。`);
    }
}