// keyof型・lookup型

/*
lookup型
T型[K]のように記述し、オブジェクトのT型が持つプロパティKの型を示す。
Kは文字列で記述。
*/

type Human = {
    type: 'human',
    name: string;
    age: number;
};

const setAge = (human: Human, age: Human['age']): Human => {
    return {
        ...human,
        age
    };
};

const taro: Human = {
    type: 'human',
    name: 'taro',
    age: 24
};

console.log(taro);

console.log(setAge(taro, 25));

/*
keyof型
keyof T型のように記述し、T型のオブジェクトのプロパティの型を得る。
*/

type HumanKeys = keyof Human;
let key: HumanKeys = 'name';
key = 'type';

export {};