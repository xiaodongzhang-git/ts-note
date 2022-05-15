// union-type.ts

let unionAtrr: string | number;
unionAtrr = 'beijing';
console.log(unionAtrr);
console.log(unionAtrr.length);
unionAtrr = 100;
console.log(unionAtrr);
// 在赋值的时候会自动定义类型
// console.log(unionAtrr.length); //类型“number”上不存在属性“length”。ts(2339)
