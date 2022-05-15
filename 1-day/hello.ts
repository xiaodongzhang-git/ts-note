// 可以指定参数类型，无需进行判断
function sayHello(person: string) {
    return 'Hello ' + person;
}

let peroson = 'world'
console.log(sayHello(peroson))