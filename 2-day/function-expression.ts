//function-expression.ts

// js 函数表达式（Function Expression）
// let mySum = function (x, y) {
//     return x + y;
// };

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
console.log(mySum(1,2))

// 用接口定义函数的形状§
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

console.log(mySearch('hello word', 'hello'))

// 重载
// 需求：实现一个函数 reverse，输入数字 123 的时候，输出反转的数字 321，输入字符串 'hello' 的时候，输出反转的字符串 'olleh'。
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

console.log(reverse(123))
console.log(reverse('hello'))