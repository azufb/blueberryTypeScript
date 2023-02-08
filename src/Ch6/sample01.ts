// ユニオン型とインターセクション型

/*
ユニオン型
T型 | U型のように記述し、T型またはU型という意味になる。
*/

type Animal = {
    species: string;
    age: string;
};

type Human = {
    name: string;
    age: number;
};

// User型の値は、Animal型またはHuman型
type User = Animal | Human;

const tama: User = {
    species: 'Felis silvestris catus',
    age: '永遠の17歳'
};

const uhyo: User = {
    name: 'Uhyo',
    age: 26
};

// Animal型またはHuman型を持つUser型のageプロパティにアクセスするとどんな型になる？
function showAge(user: User) {
    // ageは、string型もしくはnumber型。
    // Animal型においてageは、string型。Human型においてageは、number型。
    const age: string | number = user.age;
    console.log(age);
};

showAge(tama);
showAge(uhyo);

/*
インターセクション型
T型 & U型のように記述し、T型かつU型であるという意味。
交差型とも呼ぶ。
インターセクション型を充てた型とT型は、部分型関係。
*/

type Animal2 = {
    species: string;
    age: number;
};

// Human2型とAnimal2型は、部分型関係にある。Human2型の値は、Animal2型の値でもある。
type Human2 = Animal2 & {
    name: string;
};

const piyo: Animal2 = {
    species: 'Felis silvestris catus',
    age: 3
};

const taro: Human2 = {
    species: 'Homo sapiens sapiens',
    age: 24,
    name: 'taro'
};

export {};