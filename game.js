let timer; // таймер
let i; // номер строки массива
let j; // номер столбца массива
let number = 0; // номер картинки
let count = 0; // начальное значение счета
let inter = 1000;
let thingsArr = [
  ["images/cat.png", "images/star.png", "images/heart.png", "images/sun.png"],
  [
    "images/ghost.png",
    "images/slime.png",
    "images/spider.png",
    "images/spirit.png",
  ],
];

let field = document.getElementById("field"); // поле
let score = document.getElementById("score"); // счет

function getRandomInt(n) {
  // случайное число
  return Math.floor(Math.random() * n);
}

function create() {
  i = getRandomInt(2); // номер строки массива
  j = getRandomInt(4); // номер столбца массива
  let left = getRandomInt(550); // левый отступ
  let top = getRandomInt(350); // верхний отступ
  let id = "thing" + number; // создаем id по номеру
  let thing = document.createElement("img"); // Создаем элемент img
  thing.id = id; // Добавляем id='thing0' и т.д.
  //thing.setAttribute('id', id);
  thing.src = thingsArr[i][j]; // Добавляем src='images/...' из массива.
  //thing.setAttribute('src', thingsArr[i][j]);

  thing.setAttribute("onclick", "check(" + id + ")"); // Добавляем обработку события click

  thing.style.left = left + "px"; // Устанавливаем левый отступ
  thing.style.top = top + "px"; // Устанавливаем верхний отступ
  if (i == 0) thing.className = "noneatable"; // Добавляем class='noneatable'
  else thing.className = "eatable"; // Добавляем class='eatable'

  field.appendChild(thing); // Встраиваем элемент на поле
  removeThing(id);
  number++;
  // if (number >= 20) {
  //   stop();
  //   score.innerHTML = count + " Game over!";
  // }
}

function removeThing(id) {
  let item = document.getElementById(id);
  setTimeout(function () {
    field.removeChild(item);
  }, inter); //удаляем через секунду
}

function check(thing) {
  //let thing = document.getElementById(id);
  if (thing.className == "eatable") {
    speed();
    count++; //увеличиваем счет
  } else {
    stop();
    alert("Ви програли!");
  }
  if (count == 10) {
    stop();
    alert("Ви виграли!");
  }
  score.innerHTML = count;
}

timer = setInterval(create, inter); // рисовать каждые 10мс

function stop() {
  clearInterval(timer); // завершить анимацию
}

function speed() {
  // функция для задания скорости
  inter -= 50; // установили новое время
  console.log(inter);
  clearInterval(timer); // Очищаем старый интервал
  timer = setInterval(create, inter); // устанавливаем новый
}
