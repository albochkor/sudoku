function read() {
  const fs = require("fs");
  const path = require("path");
  const { EOL } = require("os");

  const dirPath = path.join(__dirname);

  const strMain = fs
    .readFileSync(dirPath + "/puzzles.txt", "utf-8")
    .trim()
    .split(`${EOL}`);
  return strMain;
}

function getString(strMain){
  let arr = []
  for (let i = 0; i < strMain.length; i++) {
    arr.push(strMain.slice(9 * i, 9 * (i + 1)))
  }
  return arr
}


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
