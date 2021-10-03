let skaicius = 123654;
let skaitmenys = [];
let sk = skaicius;

if (sk === 0) {
    skaitmenys.push(0);
} else {
    while (sk > 0) {
        const skaitmuo = sk % 10;
        skaitmenys.push(skaitmuo + 48);
        sk = (sk - skaitmuo) / 10;
    }
}

skaitmenys.reverse();
console.log(skaitmenys);
let tekstas = "";
for (const s of skaitmenys) {
    tekstas += String.fromCharCode(s);
}

console.log(skaicius);
console.log(tekstas);


// 1E306
// 11110001100000110

