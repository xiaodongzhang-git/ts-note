// class-demo.ts

class Person {
    public readonly name: string; // 可以声明只读之类的属性，不过必需在其他访问修饰符之后
    private sex: number = 0; // 私有的，外部，子类无法访问
    protected school: string = 'shuangye';
    public constructor(name:string) {
        this.name = name;
    }
}

let studentOne:Person = new Person('xiaoxin');
console.log(studentOne)
// console.log(studentOne.sex); // 属性“sex”为私有属性，只能在类“Person”中访问。
// console.log(studentOne.school) // 属性“school”受保护，只能在类“Person”及其子类中访问。ts(2445)
console.log(studentOne.name);


// 抽象类abstract 无法实例化，一般是继承，继承的时候需要实现所有方法
abstract class Animal {
    public name:string;
    public constructor(name:string) {
      this.name = name;
    }
    public abstract sayHi(): string;
  }

class Cat extends Animal {
    public sayHi(): string {
        return `hello, My name is ${this.name}`;
}
}

let cat = new Cat('Tom');
console.log(cat.sayHi())

