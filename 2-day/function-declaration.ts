// function-declaration.ts


// js声明函数的方式
// function sum(x, y) {
//     return x + y;
// }

// 需求，定义一个函数用来实现2个数相加
function sumOne(x: number, y: number):number {
    return x + y;
}
console.log(sumOne(1, 2))

// 需求：有可能有3个参数，也有可能有2个
// ? 代表可选 可选参数必须放在必需参数后，不然会报错
function sumTwo(x: number, y: number, z?: number):number {
    return z? x + y + z: x + y; //三目运算
}
console.log(sumTwo(1,2,3))
console.log(sumTwo(1,2))

// 需求：如果第三个不传，默认是1
function sumThree(x: number, y: number, z: number=1):number {
    return x + y + z;
}

console.log(sumThree(1,2))

// 需求，前面2个参数固定，后面不定数量的参数
// 注意，rest 参数只能是最后一个参数
function sumFive(x: number, y: number, ...items: number[]):number {
    let res:number = x + y;
    items.forEach(item => res += item)
    return res;
}

console.log(sumFive(1,2, 3,4,5,6))