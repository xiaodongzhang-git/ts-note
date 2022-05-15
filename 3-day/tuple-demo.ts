// tuple-demo.ts

let xx: [string, number] = ['xiaoxin', 5]
console.log(xx)
xx.push('chunribu')
console.log(xx)
// xx.push(true); // 添加越界元素会自动判断是不是联合类型：string｜ number
// 可通过下角标操作元素
xx[0] = 'fengjian';
console.log(xx)
