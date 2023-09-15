function read() {
  const fs = require("fs");
  const path = require("path");
  const { EOL } = require("os");

  const dirPath = path.join(__dirname);

  const strMain = fs
    .readFileSync(dirPath + "/puzzles.txt", "utf-8")
    .trim()
    .split(`${EOL}`);
  return strMain[0];
}
function getString(read) {
  let arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push(read.slice(9 * i, 9 * (i + 1)));
  }
  return arr;
}

function checkStr(str){
  str = str.split('')
  for (let i = 0; i < str.length; i++) {
    if(str[i] === '-'){
      for (let j = 1; j < 10; j++) {
        if(!str.includes(j.toString())){
          str[i] = j.toString()
        }
      }
    }
  }
  return str;
}

// console.log(checkStr(getString(read())));

function getColumn(read) {
  let res = []
  for (let i = 0; i < read.length; i++) {
    let temp = []
    for (let j = 0; j < read.length; j++) {
      temp.push(read[j][i])
    }
    res.push(temp.join(''))
  }
  return res;
}
console.log(getString(read()));
console.log(getColumn(getString(read())));

//console.log(getString(read()));
//console.log(getColumn(read()));

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
