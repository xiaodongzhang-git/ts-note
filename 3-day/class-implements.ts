//class-implements.ts

interface Alarm {
    alert(): void;
}

interface Light {
    lightOn(): void;
    lightOff(): void;
}


class Door {}

class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}

class Car implements Alarm, Light {  // 可以继承多个接口
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}

let sd = new SecurityDoor();
sd.alert();


let car = new Car();
car.alert();
car.lightOn();
car.lightOff();