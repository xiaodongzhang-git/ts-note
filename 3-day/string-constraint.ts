// string-constraint.ts

type Name = 'xiaoxin' | 'fengjian' | 'adai'; // 必需是其中的一个
// let myName:Name = 'nini'; // 不能将类型“"nini"”分配给类型“Name”。ts(2322)
let myName:Name = 'xiaoxin'; 
console.log(myName);