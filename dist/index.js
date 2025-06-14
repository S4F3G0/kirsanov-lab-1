"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const promptBtn = document.getElementById("promptBtn");
    promptBtn.addEventListener("click", () => {
        const user = prompt("Введите ваше имя:");
        if (user && user.trim()) {
            alert(`Привет, ${user.trim()}!`);
        }
        else {
            alert("Вы не ввели имя.");
        }
    });
    const inputBtn = document.getElementById("inputBtn");
    const nameInput = document.getElementById("nameInput");
    const outputText = document.getElementById("greetingOutput");
    inputBtn.addEventListener("click", () => {
        const name = nameInput.value.trim();
        if (name) {
            outputText.textContent = `Привет, ${name}!`;
        }
        else {
            outputText.textContent = "Пожалуйста, введите имя.";
        }
    });
});
console.log("--- Типы данных в TypeScript ---");
const str = "Пример строки";
const num = 123.456;
const bool = true;
const undef = undefined;
const nul = null;
const obj = { a: 1 };
const arr = [1, 2, 3];
const anyVar = "Может быть чем угодно";
console.log(`str: ${typeof str}`); // string
console.log(`num: ${typeof num}`); // number
console.log(`bool: ${typeof bool}`); // boolean
console.log(`undef: ${typeof undef}`); // undefined
console.log(`nul: ${typeof nul}`); // object (особенность JS)
console.log(`obj: ${typeof obj}`); // object
console.log(`arr: ${typeof arr}`); // object (массив — частный случай объекта)
console.log(`anyVar: ${typeof anyVar}`); // string (сейчас)
console.log("--- Числовые пределы ---");
// TypeScript основан на JavaScript, где все числа — 64-битные числа с плавающей точкой (IEEE 754)
console.log("Максимальное число:", Number.MAX_VALUE); // ≈ 1.7976931348623157e+308
console.log("Минимальное положительное число:", Number.MIN_VALUE); // ≈ 5e-324
console.log("Макsafe integer:", Number.MAX_SAFE_INTEGER); // 2^53 - 1 = 9007199254740991
console.log("Min safe integer:", Number.MIN_SAFE_INTEGER); // -2^53 + 1 = -9007199254740991
/*
    - В JavaScript/TypeScript нет int, float, double — только один тип number (64-битный double).
    - MAX_VALUE — наибольшее представимое число.
    - MIN_VALUE — наименьшее положительное число > 0 (ближайшее к 0).
    - MAX_SAFE_INTEGER — наибольшее целое число, точно представимое без потерь.
    - MIN_SAFE_INTEGER — аналогично в отрицательную сторону.
*/
const edgeBtn = document.getElementById("calcVolumeBtn");
const edgeInput = document.getElementById("edgeInput");
const volumeOutput = document.getElementById("volumeOutput");
edgeBtn.addEventListener("click", () => {
    const edge = parseFloat(edgeInput.value);
    if (isNaN(edge) || edge <= 0) {
        volumeOutput.textContent = "Введите корректную длину ребра > 0";
        return;
    }
    // Формула объема додекаэдра: V = (15 + 7√5) / 4 × a³
    const volume = ((15 + 7 * Math.sqrt(5)) / 4) * Math.pow(edge, 3);
    volumeOutput.textContent = `Объём додекаэдра с ребром ${edge} ≈ ${volume.toFixed(3)}`;
});
