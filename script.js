//1
let a = 10;
alert(a);
a = 20;
alert(a);

//2
let iphoneDate = 2007;
alert(iphoneDate);

//3
let jsName = `Brendon Eich`;
alert(jsName);

//4
let b1 = 10;
let b2 = 2;
alert(b1+b2);
alert(b1-b2);
alert(b1*b2);
alert(b1/b2);

//5
let result = 2**5;
alert(result);

//6
let a = 9;
let b = 2;
alert(a%b);

//7
let num = 1;
num+=5;
num-=3;
num*=7;
num/=3;
num++;
num--;
alert(num);

//8
let age = prompt(`Сколько вам лет?`);
alert(age);

//9.0
let user = {
    name: `Ivan`,
    age: 30,
    isAdmin: true,
    [`city of residence`]: 1
}

user.age = 15;
delete user["city of residence"];


let info = prompt(`Какую информацию хотите узнать о пользователе?`);
alert(user.info);

//10
let userName = prompt(`Как тебя зовут?`);
alert(`Привет, ${userName}!`); 