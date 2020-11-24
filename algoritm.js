/* 1. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legkisebb elemét! */

function getMinElementFromArray(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(getMinElementFromArray([1, -10, 2, -100, 3]))


/* 2. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legnagyobb elemét! */

function getMaxElementFromArray(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(getMaxElementFromArray([1, -10, 2, -100, 3]))

/* 3. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb átlagát! */

function getAvarageElementFromArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i]
    }
    return sum / arr.length;
}

console.log(getAvarageElementFromArray([1, -10, 2, -100, 3]))



/* 4. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb összegét! */

function getSumElementFromArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i]
    }
    return sum;
}

console.log(getSumElementFromArray([1, 10, 2, 100, 3]))

/* 5. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb páros elemeinek a számát! */

function evenCounter(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === 0) {
            count += 1;
        }
    }
    return count;
}

console.log(evenCounter([1, 2, 3, 4, 5]));


/* 6. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb második legkisebb elemét! */

/* 1. legkisebb elem kiválsztáta
2. Hol van tömbben
3. Kitöröljük a tömbből
4. Újból kiválasztom a legkisebb elemet 
splice - Honnan és hány darabot akarok törölni*/
/* function getSecondSmallestElementFromArray(arr) {
    let min = getMinElementFromArray(arr);
    const index = arr.indexOf(min);
    arr.splice(index, 1); 
    min = getMinElementFromArray(arr);
    return min;
}

console.log(getSecondSmallestElementFromArray([1, 3, 5, 7, 9])); */

/* -----------BUBBLESORT-------------*/


const arr = [5, 312, 43, 24, 31, 3, 23]

function bubbleSortGrowing(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}

console.log(bubbleSortGrowing(arr));

// 6. megoldás ----------------------------------

function getNthSmallestElementFromArray(arr, nth) {
    // const sortedArray = bubbleSortGrowing(arr);
    return bubbleSortGrowing(arr)[nth - 1];
}

console.log(getNthSmallestElementFromArray(arr, 2));


/* 7. Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb harmadik legnagyobb elemét! */

function bubbleSortDecreasing(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}

console.log(bubbleSortDecreasing(arr));

function getNthLargestElementFromArray(arr, nth) {
    return bubbleSortDecreasing(arr)[nth - 1];
}

console.log(getNthLargestElementFromArray(arr, 3));

// -----Másik megoldás--------

function getNthLargestElementFromArray(arr, nth) {
    return bubbleSortGrowing(arr)[arr.length - nth];
}

console.log(getNthLargestElementFromArray(arr, 3));


/* 8. Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük,
    hogy beágyazott tömböt, objektumot, egyéb iterálható elemet nem tartalmaz) tartalmazza-e a 23-as számot!
    Használj lineáris keresést! */

function linearSearch(arr, search) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === search) {
            return 'igen';
        }
    }
    return 'nem';
}

console.log(linearSearch(arr, 23));


/* 9. Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat tartalmazó tömb tartalmazza-e a 23-as számot!
    Használj logaritmikus (bináris) keresést! Nézz utána mi az, milyen feltételei vannak, és hogyan valósítható meg! */

// Előtte rendezni kell a tömböt -> bubbleSort valamelyik függvényével!!!

function binarySearch(arr, search) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mind] === saerch) {
            return 'igen';
        }
        else if (arr[mid] < search) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return 'nem';
}


/* 10. Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük,
    hogy beágyazott tömböt, objektumot nem tartalmaz) hányszor tartalmazza a 23-as számot! */

function counter(arr, search) {
    let counter = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === search) {
            counter += 1;
        }
    }
    return counter;
}

console.log(counter(arr, 23));

/* 11. Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú,
csak lebegőpontos számokat tartalmazó tömb elemeit növekvő sorrendbe! Írasd ki a rendezett tömböt! */

const floatArr = [98.21, 23.23, 75.63, 64.58, 56.246, 89.541]

console.log(bubbleSortGrowing(floatArr));

/* 12. Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú,
beágyazott tömb, és objektum kivételével bármilyen típusú elemeket tartalmazó tömb elemeit csökkenő sorrendbe!
A nem szám típusú elemeket rakd a tömb végére az eredeti sorrendbe. Írasd ki a rendezett tömböt! */

// 1. tömb számokkal
// 2. tömb nem számokkal
// 3. a szám tömböt sorba rendezem
// 4. a szám tömböt összefőzöm a nem szám tömbbel

const mixedArr = ['alma', 33, false, 25, 'körte', 56, 11, true]

// function customSort(arr) {
//     let numbers = [];
//     let notNumbers = [];
//     for (let i = 0; i < arr.length; i +=1 ) {
//         if(typeof arr[i] === 'number') {
//             numbers.push(arr[i]);
//         } else {
//             notNumbers.push(arr[i]);
//         }
//     }
//     numbers = bubbleSortGrowing(numbers);
//     return numbers.concat(notNumbers);
// }

// console.log(customSort(mixedArr));

function getNumericValues(arr) {
    const numbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            numbers.push(arr[i]);
        }
    }
    return numbers;
}

function getNotNumericValues(arr) {
    const notNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            notNumbers.push(arr[i]);
        }
    }
    return notNumbers;
}

function customSort(arr) {
    return bubbleSortGrowing(getNumericValues(arr)).concat(getNotNumericValues(arr));
}

console.log(customSort(mixedArr));

/* 13. Adott egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb. A tömb elemeit rendezzük növekvő sorrendbe.
Ezután a felhasználótól kérjünk be egy számot (addig kérjünk be értéket, míg valóban egy véges egész számot ad meg).
A számot szúrjuk be a tömbbe úgy, hogy a tömb továbbra is rendezett maradjon, tehát a megfelelő indexű helyre kerüljön be a plusz elem.
Írasd ki a rendezett tömböt! */

// 1. rendezzük a tömböt
// 2. bekérünk egy számot
// 3. beszúrjuk a számot

function inputNumericData() {
    let number;
    do {
        number = parseInt(prompt('Adj meg egy számot'), 10);
    }
    while (Number.isNaN(number) || number === Number.POSITIVE_INFINITY || number === Number.NEGATIVE_INFINITY)
    return number;
}

function insertionSort(arr) {
    const sortedArr = bubbleSortGrowing(arr);
    const number = inputNumericData();
    for (let i = 0; i < sortedArr.length; i += 1) {
        if (sortedArr[i] > number) {
            sortedArr.splice(i, 0, number);
            return sortedArr;
        }
    }
}

// console.log(insertionSort(arr));


/* 14. Adott egy tömb, mely azonos darabú egész számot, és szöveget tartalmaz véletlenszerű sorrendben.
Rendezzük úgy a tömböt, hogy minden szám után egy string következzen! Írasd ki a rendezett tömböt! */

// function getStringFromAnArray(arr) {
//     const strings = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (typeof arr[i] === 'string') {
//             strings.push(arr[i])
//         }
//     }
//     return strings;
// }

// function getNumberFromAnArray(arr) {
//     const numbers = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (typeof arr[i] === 'number') {
//             numbers.push(arr[i])
//         }
//     }
//     return numbers;
// }

const differentArr = ['János', 'Julika', 'Ágoston', 'Júlia', 'Cecília', 40, 41, 15, 12, 7]

function getElementsByType(arr, type) {
    const elements = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === type) {
            elements.push(arr[i])
        }
    }
    return elements;
}

function manualSort(arr) {
    const strings = getElementsByType(arr, 'string');
    const numbers = getElementsByType(arr, 'number');
    const sortedArr = [];
    for (let i = 0; i < strings.length; i += 1) {
        sortedArr.push(numbers[i], strings[i]);
    }
    return sortedArr;
}

console.log(manualSort(differentArr));

/* 15. Adott egy tetszőleges pozitív egész számokat tartalmazó tömb.
Válogassuk szét külön egy even (páros), és odd (páratlan) nevezetű tömbbe a páros, és páratlan számokat!
Írjuk ki a 2 tömböt! */

const evenMixOdd = [2, 1, 58, 66, 31, 87, 99, 84]

// function evenOdd(arr) {
//     const even = [];
//     const odd = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i] % 2 === 0) {
//             even.push(arr[i]);
//         } else {
//             odd.push(arr[i]);
//         }   
//     }
//     console.log(even);
//     console.log(odd);
// }

// evenOdd(evenMixOdd);

// function getEvenElements(arr) {
//     const even = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i] % 2 === 0) {
//             even.push(arr[i]);
//         }
//     }
//     return even;
// }

// function getOddElements(arr) {
//     const odd = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i] % 2 === 1) {
//             odd.push(arr[i]);
//         }
//     }
//     return odd;
// }

function getEvenOrOddElements(arr, evenOrOdd) {
    const number = evenOrOdd === 'even' ? 0 : 1;
    const elements = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === number) {
            elements.push(arr[i]);
        }
    }
    return elements;
}

console.log(getEvenOrOddElements(evenMixOdd, 'even'));
console.log(getEvenOrOddElements(evenMixOdd, 'odd'));

/* 16. Adott két azonos elemszámú, csak egész számokat tartalmazó tömb.
Külön tömbökbe készítsük el a két tömb: metszetét, unióját, különbségét, és descartes szorzatát.
Írassuk ki az új tömböket! */

const algebra1 = [1, 2, 3, 4, 5];
const algebra2 = [3, 4, 5, 6, 7];

// --- METSZET ---

function section(arr1, arr2) {
    const section = [];
    for (let i = 0; i < arr1.length; i += 1) {
        if (arr1.indexOf(arr2[i]) !== -1) {
            section.push(arr2[i]);
        }
    }
    return section
}

console.log(section(algebra1, algebra2));

// --- UNIÓ ---

function union(arr1, arr2) {
    const union = [];
    for (let i = 0; i < arr1.length; i += 1) {
        if (union.indexOf(arr1[i]) === -1) {
            union.push(arr1[i]);
        }
        if (union.indexOf(arr2[i]) === -1) {
            union.push(arr2[i]);
        }
    }
    return union;
}

console.log(union(algebra1, algebra2));

// --- KÜLÖNBSÉG ---

function difference(arr1, arr2) {
    const difference = [];
    for (let i = 0; i < arr1.length; i += 1) {
        if (arr2.indexOf(arr1[i]) === -1) {
            difference.push(arr1[i]);
        }
    }
    return difference
}

console.log(difference(algebra1, algebra2));

// --- DESCARTES SZORZAT ---

function descartes(arr1, arr2) {
    const descartes = [];
    for (let i = 0; i < arr1.length; i += 1) {
        for (let j = 0; j < arr2.length; j += 1) {
            descartes.push(arr1[i] * arr2[j]);
        }
    }
    return descartes;
}

console.log(descartes(algebra1, algebra2));