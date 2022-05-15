// enum-demo.ts

// 对应的值从0开始
enum DaysOne {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
console.log(DaysOne)
console.log(DaysOne["Sun"] === 0); // true
console.log(DaysOne["Mon"] === 1); // true
console.log(DaysOne[0] === "Sun"); // true
console.log(DaysOne[1] === "Mon"); // true

// 可以手动指定某些值，为指定的会从上一个开始递增
enum DaysTwo {Sun=3, Mon=0, Tue, Wed, Thu, Fri, Sat};
console.log(DaysTwo)
//会出现覆盖的现象
console.log(DaysTwo[3] === "Sun"); // false
console.log(DaysTwo[3] === "Thu"); // true

