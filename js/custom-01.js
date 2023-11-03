/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
let vardas = 'Onute'
let pavarde = 'Jonaite'
let gimimoMetai = 1986
let data =new Date().getFullYear()
let amzius = data - gimimoMetai
console.log('1 uzduotis------')
console.log(`Aš esu ${vardas} ${pavarde}. Man yra ${amzius} metai`)
console.log(`Aš esu ${vardas} ${pavarde}. Man yra ${amzius} metai`)

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
console.log('2 uzduotis------')
let num1 = Math.floor(Math.random()*5)
let num2 = Math.floor(Math.random()*5)
let dalmuo = 0
if(num1 > num2){
    dalmuo = num1/num2
    console.log(dalmuo.toFixed(2))
}else {
    dalmuo =num2/num1
    console.log(dalmuo.toFixed(2))
}

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/
console.log('3 uzduotis------')
let num3 = Math.floor(Math.random()*26)
let num4 = Math.floor(Math.random()*26)
let num5 = Math.floor(Math.random()*26)

if((num3>num4 && num3<num5) || (num3<num4 && num3>num5)){
    console.log(num3)
} else if((num4<num3 && num4>num5) || (num4>num3&&num4<num5)){
    console.log(num4)
}else {
    console.log(num5)
}

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
console.log('4 uzduotis------')
let kr1=Math.floor(Math.random()*10)+1
let kr2=Math.floor(Math.random()*10)+1
let kr3=Math.floor(Math.random()*10)+1
if((kr1+kr2) > kr3 && (kr1+kr3) > kr2 && (kr2+kr3)>kr1){
    console.log('gali sudaryt trikampi')
} else{
    console.log('negali sudaryt trikampi')
}

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
console.log('5 uzduotis------')
let a= 0
let nuliai = 0
let vienetai = 0
let dvejetai =0
for(let i =1; i <=4 ;i++){
     a= Math.floor(Math.random()*3)
     if(a ===0){
        nuliai++
     } else if(a=1){
        vienetai++
     }else{
        dvejetai++
     }
     
}console.log(`nuliai: ${nuliai},vienetai: ${vienetai}, dvejetai: ${dvejetai}` )



/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
console.log('6 uzduotis------')

for(let i=0;i<3;i++){
let b = Math.floor(Math.random()*(10+10)-10)
if(b<0){
    console.log('[',b,']')
}else if(b=0){
    console.log('(',b,')')
}else{
    console.log('{',b,'}')
}

}



/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/
console.log('7 uzduotis------')

let kaina =1
let zvakiuKiekis =  Math.floor(Math.random() * (3000 - 5)) + 5
let nuolaida1 = 3
let nuolaida2 =4
let zvakiuSuma = 0

if(zvakiuKiekis >=2000){
    zvakiuSuma = zvakiuKiekis-zvakiuKiekis/100*nuolaida2
}else if(zvakiuKiekis>=1000 && zvakiuKiekis< 2000){
    zvakiuSuma = zvakiuKiekis-zvakiuKiekis/100*nuolaida1
} else{
    zvakiuSuma=zvakiuKiekis
}
console.log(`Viso parduota ${zvakiuKiekis} zvakiu, uz ${zvakiuSuma} euru`)
/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
console.log('8 uzduotis------')

let x = 0
let y =0
let vidurkis = 0
let vidurkis2 = 0
for(let i=1; i<=3; i++){
    x+=Math.floor(Math.random()*101)
    console.log("atsitiktiniai skaiciai:",x)
    if(x>=10 && x<=90){
    y+=x
    }
}
vidurkis = (x/3).toFixed(0)
vidurkis2 =(y/3).toFixed(0)
console.log('aritemetinis vidurkis:',vidurkis, 'vidurkis atmetus reiksmes mazesnes nei a1 ar didesnes nei 90:',vidurkis2)


/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/
console.log('9 uzduotis------')


let sekundes = Math.floor(Math.random()*60+1)
let minutes = Math.floor(Math.random()*60+1)
let valandos = Math.floor(Math.random()*60+1)
let papildomas =Math.floor(Math.random()*300+1)
console.log(`pradinis laikas ${valandos}:${minutes}:${sekundes}`)
let visoSekundziu = sekundes + papildomas
if(visoSekundziu>= 60 && visoSekundziu <120){
    minutes++
    if(minutes===60){
        valandos++
        minutes=0
    }
    sekundes+=(visoSekundziu-60)
} else if( visoSekundziu>= 120 && visoSekundziu < 180){
    minutes=minutes+2
    if(minutes===60){
        valandos++
        minutes=0
    }
    sekundes+=(visoSekundziu-120)
}else if( visoSekundziu>= 180 && visoSekundziu < 240){
    minutes=minutes+3
    if(minutes===60){
        valandos++
        minutes=0
    }
    sekundes+=(visoSekundziu-180)
}else if( visoSekundziu>= 240 && visoSekundziu < 300){
    minutes=minutes+4
    if(minutes===60){
        valandos++
        minutes=0
    }
    sekundes+=(visoSekundziu-240)
} else if(visoSekundziu==300){
    minutes = minutes + 5
    if(minutes===60){
        valandos++
        minutes=0
    }
}else {
    sekundes+= visoSekundziu
}
console.log(`naujas laikas ${valandos}:${minutes}:${sekundes}`)
/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/
console.log('10 uzduotis------')

let random1 =  Math.floor(Math.random() * (9999 - 1000)) + 1000
let random2 =  Math.floor(Math.random() * (9999 - 1000)) + 1000
let random3 =  Math.floor(Math.random() * (9999 - 1000)) + 1000
let random4 =  Math.floor(Math.random() * (9999 - 1000)) + 1000
let random5 =  Math.floor(Math.random() * (9999 - 1000)) + 1000
let random6 =  Math.floor(Math.random() * (9999 - 1000)) + 1000



console.log(`${random1}, ${random2}, ${random3}, ${random4}, ${random5}, ${random6}`)//nezinau kaip be masyvo surusiuot