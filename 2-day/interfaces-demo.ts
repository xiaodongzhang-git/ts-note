//interfaces-demo.ts
// 需求：定义一个人的接口，有名字和年龄2个固定属性
interface PersonOne{
    name: string;
    age: number;
}

let zs:PersonOne =  {
    name: "zhangsan",
    age: 18
};
console.log(zs);


// 需求：增加一个属性isBoy，true为男，false为女，不过这个属性有的人有，有的没有

// 接口的属性数量和名字是固定的，不能增加或减少
// let ls:PersonOne =  {
//     name: "lisi",
//     age: 20,
//     isBoy: true // 不能将类型“{ name: string; age: number; isBoy: boolean; }”分配给类型“PersonOne”,对象文字可以只指定已知属性，并且“isBoy”不在类型“PersonOne”中。
// };

// ? 代表是可选的属性
interface PersonTwo{
    name: string;
    age: number;
    isBoy?: boolean;
}

let xx:PersonTwo = {
    name: 'xiaoxin',
    age: 5,
    isBoy: true
}

let fj:PersonTwo = {
    name: 'fengjian',
    age: 6,
} // 可选
console.log(xx)
console.log(fj)

// 需求：接口属性可以随便添加，无需前期定义好
// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
interface PersonThree{
    name: string;
    age: number;
    isBoy?: boolean; // 如果是可选属性的话，其实隐藏了undefined类型
    // [propName: string]: string; //使用 [propName: string] 定义了任意属性取 string 类型的值。
    [propName: string]: string | number | boolean | undefined;
}

let nn: PersonThree = {
    name: 'nini',
    age: 4,
    isBoy: false,
    phone: '110'
}
console.log(nn)

// 需求：年龄属性是只读的，不能随便更改
interface PersonFour{
    name: string;
    readonly age: number; // readonly代表只读
    isBoy?: boolean;
    [propName: string]: any;
}

let ad: PersonFour = {
    name: 'adai',
    age: 5,
    isBoy: true,
    phone: '120'
}
// ad.age = 6; // 无法分配到 "age" ，因为它是只读属性。ts(2540)
console.log(ad)

// 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
// let xk: PersonFour = {
//     name: 'xiaokui',
//     phone: '130'
// }
// xk.age = 1;