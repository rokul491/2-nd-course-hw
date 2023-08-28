//1
/*let a = 10;
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
alert(user[info]);

//10
let userName = prompt(`Как тебя зовут?`);
alert(`Привет, ${userName}!`); 

//
// Lesson 3
//

//1
let password = 'пароль';
let checkPassword = prompt('Введите пароль');

if (checkPassword === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

//2
let c = 2;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//3
let d = 93;
let e = 105;
 if (d > 100 || e > 100) {
    console.log('Верно');
 } else {
    console.log('Неверно');
 }

 //4
 let a = '2';
 let b = '3';

 a = Number(a);
 b = Number(b);
 alert(a + b);

 //5
let monthNumber = 13;
switch(monthNumber) {
    case 1:
        alert('Зима');
        break;
    case 2:
        alert('Зима');
        break;
    case 3:
        alert('Весна');
        break;
    case 4:
        alert('Весна');
        break;
    case 5:
        alert('Весна');
        break;
    case 6:
        alert('Лето');
        break;
    case 7:
        alert('Лето');
        break;
    case 8:
        alert('Лето');
        break;
    case 9:
        alert('Осень');
        break;
    case 10:
        alert('Осень');
        break;
    case 11:
        alert('Осень');
        break;
    case 12:
        alert('Зима');
        break;
    default:
        alert('Неверный номер месяца');    
}

while (true) {
    const msg = prompt('Введи break');
    if (msg === 'break') {
        break;
    } 
    if (msg === 'continue') {
        continue;
    }
    else {
        console.log(msg);
    }
}*/

//
// Lesson 4
//

//1
let i = 1;
do {
    console.log('Привет');
    i++;    
} while (i <= 2);

//2
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

//3
let i = 7;
do {
    console.log(i);
    i++;
} while (i >= 7 && i <= 22);

//4
let obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
};

for (let name in obj) {
    console.log(name, '- зарплата', obj[name], 'долларов');
}

//5
let n = 1000;
let num = 0;
do {
    n /= 2;
    num++;
} while (n > 50);
console.log(num);
console.log(n);

//6
let friday = 4;
for(let dayCount = 1; dayCount <= 31; dayCount++) {
    if ((dayCount - friday) % 7 == 0) {
        console.log('Сегодня пятница,', dayCount, '-е число. Необходимо подготовить отчет');
    }
}