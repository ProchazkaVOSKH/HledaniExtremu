// Pole obsahující čísla, ve kterém budeme hledat nejmenší a druhé nejmenší hodnoty
const pole = [3, -1, 3, 5, -10, 7, 6, 4, 1, -5, -3, 5, -25];

// Funkce pro nalezení nejmenší hodnoty v poli
function nejmensi(x) {
    let min = Infinity; // Inicializace proměnné min na nekonečno
    for (let i = 0; i < x.length; i++) { // Procházení všech prvků pole
        if (x[i] < min) min = x[i]; // Pokud je aktuální prvek menší než min, aktualizujeme min
    }
    return min; // Vrací nejmenší hodnotu
}

// Funkce pro nalezení druhé nejmenší hodnoty v poli
function druhenejmensi(x) {
    let min1 = Infinity; // Inicializace první nejmenší hodnoty na nekonečno
    let min2 = Infinity; // Inicializace druhé nejmenší hodnoty na nekonečno
    for (let i = 0; i < x.length; i++) { // Procházení všech prvků pole
        if (x[i] < min1) { 
            // Pokud je aktuální prvek menší než min1, posuneme min1 do min2 a aktualizujeme min1
            min2 = min1;
            min1 = x[i];
        } else if (x[i] < min2 && x[i] !== min1) {
            // Pokud je aktuální prvek menší než min2 a není stejný jako min1, aktualizujeme min2
            min2 = x[i];
        }
    }
    return min2; // Vrací druhou nejmenší hodnotu
}

// Funkce pro výpočet průměru hodnot v poli
function prumer(x) {
    let soucet = 0; // Inicializace proměnné pro součet prvků pole
    for (let i = 0; i < x.length; i++) soucet += x[i]; // Sčítání všech prvků pole
    return soucet / x.length; // Vrací průměr (suma prvků dělená počtem prvků)
}

// funkce vyhledání pořadí prvku, který je nejblíže průměru hodnot
function nejblizeprumeru(x) {
    let minRozdilu = Infinity; 
    let indexMinima;                 // připravím si proměnnou pro pořadové číslo nejbližšího prvku
    let rozdil;                      // připravím si proměnnou pro vzdálenost prvku od průměru
    let prumernaHodnota = prumer(x); // spočítám průměr a zapamatuji si ho v proměnné
    for (let i = 0; i < x.length; i++) { 
        rozdil = Math.abs(prumernaHodnota-x[i]);   // rozdíl může být kladný nebo záporný -> absolutní hodnota
        if (rozdil < minRozdilu) {
            minRozdilu = rozdil;
            indexMinima = i;
        }
    }
    return indexMinima+1; 
}


console.log(prumer(pole));
console.log(nejblizeprumeru(pole));