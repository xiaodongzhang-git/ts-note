// original-type.ts
// boolean类型
let isBoy:boolean = false;
// let isBoy:boolean = new Boolean(1) // 返回的是个对象，不是boolean
console.log(isBoy);

// number类型： 可以用多进制来表示
let decLiteral: number = 6;
let binaryLiteral: number = 0b1010;
let notANumber: number = NaN;
console.log(binaryLiteral)
console.log(notANumber)

// string类型
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串 ` 是模版符号
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
console.log(sentence)

//Null 和 Undefined
let u: undefined = undefined;
let n: null = null;
console.log(u)
console.log(n)