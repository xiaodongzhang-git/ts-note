// array-demo.ts

// 定义数组
let arrayA: number[] = [1, 2, 3, 4, 5];
console.log(arrayA);
// let arrayB: number[] = [1, 2, 3, 4, 5, '6'];  // 不能将类型“string”分配给类型“number”。ts(2322)
// 如果需要指定不同类型，可以通过any
let arrayC: any[] = [1, 2, '3', 4, false, ['a', 1]];
console.log(arrayC);

// 类型可以是接口
interface Peroson {
    name: string;
    age: number;
}

let arrayD: Peroson[] = [
    {name: 'xiaoxin', age: 5}
]

arrayD.push({
    name: 'fengjian',
    age: 6
})

console.log(arrayD)
