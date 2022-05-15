// generics-demo.ts

// 缺陷：虽然知道返回结果类型和value是一样的，不过这样写会导致任何类型都可以返回，这个时候可以通过泛型解决
// function createArray(length: number, value: any): Array<any> {
//     let result = [];
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// }

// createArray(3, 'x'); // ['x', 'x', 'x']

function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

console.log(createArray<string>(3, 'x'));

// 定义泛型的时候，可以一次定义多个类型参数： 比如下面的交换2个元素位置
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

console.log(swap([7, 'seven']));

// 约束
// function loggingIdentity<T>(arg: T): T {
//     console.log(arg.length); // 类型“T”上不存在属性“length”。
//     return arg;
// }
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
// loggingIdentity(100); // 类型“number”的参数不能赋给类型“Lengthwise”的参数。ts(2345)
loggingIdentity('hello');


// 泛型接口
interface CreateArrayFunc<T> {
    (length: number, value: T): Array<T>;
}

let createArrayDemo: CreateArrayFunc<any>;
createArrayDemo = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArrayDemo(3, 'x');
console.log(createArrayDemo(3, 'x'));

// 泛型类 设置可选的原因是因为默认要初始化
class GenericNumber<T> {
    zeroValue?: T;
    add?: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
console.log(myGenericNumber.zeroValue);
console.log(myGenericNumber.add(1,2));


// 指定默认类型
function createArrayTest<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
console.log(createArrayTest(3, 'x'));
