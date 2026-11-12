// let i = 1;

// while (i <= 20) {
//   console.log(i);
//   i += 1;
// }

// for (let i = 0; i <= 100; i += 5) {
//   if (i > 21) {
//     break;
//   }

//   console.log(i);
// }

// for (let i = 1; i <= 1000; i += 1) {
//   if (i % 2 === 0) {
//    continue
//   }
//   console.log(i)
// }

// Напиши скрипт який порахує суму всіх парних чисел,
//  які входять в діапазон чисел в змінних від min до max.
//   Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому 2
//    парних числа - 2 та 4, їх сума 6. Можна зробити
//  отримання значень мінімального і максимального числа через інпут.

// const max = 100;
// const min = 10;
// let summa = 0;
// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     summa += i;
//   }
// }
// console.log(summa);

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

for (let j = 1; j <= 20; j++) {
  if (j % 2 !== 0) {
    continue;
  }
  console.log(j);
}

for (let k = 1; k <= 10; k++) {
  console.log("7 x " + k + " = " + 7 * k);
}

let n = 10;

for (let a = 1; ; a++) {
  if (a >= n) {
    break;
  }
  console.log(a);
}

let b = 1;

while (b <= 20) {
  if (b % 3 === 0) {
    b++;
    continue;
  }

  console.log(b);
  b++;
}
