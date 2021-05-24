function userAge() {
    let userAge = prompt("Ваш Вік");


    if (userAge <= 17) {
        alert("Вам менше ніж 18 років")
    } else if (userAge >= 18) {
        alert("Вам 18  або більше")
    } else if (userAge >= 45) {
        alert("Вам 45 або більше")
    }

}


function time() {
    let time = prompt("Уведіть число");

    if (time >= 0 && time <= 14) {
        alert('В першу четвертину.');
    } else if (time >= 15 && time <= 30) {
        alert('Во другу четвертину.');
    } else if (time >= 31 && time <= 45) {
        alert('В Третю четвертину.');
    } else if (time >= 46 && time <= 59) {
        alert('В четверту четвертину.');
    }

}

function true_false() {

    let a = 3;
    let b = 6;


    if (a > 3 && a < 12)
        alert('Правильно!');
    else alert('Не правильно!');

    if (b >= 5 && b < -13)
        alert('Правильно!');
    else alert('Не правильно!');

}