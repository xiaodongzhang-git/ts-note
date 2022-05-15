// any-demo.ts

let address:string = 'beijing';
// address = 100; // 不能将类型“number”分配给类型“string”

let anyThing: any = 'beijing';
anyThing = 100
console.log(anyThing); // 可以任意转换类型

let anyTest;
anyTest = 'shanghai';
anyTest = 200;
console.log(anyTest);