/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/
console.log('1 uzduotis-------------------')
for(let i=0; i<10; i++){
    console.log('labas')
}
/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
console.log('2 uzduotis-------------------')
let num =0
while(num<10){
    console.log(num)
    num++
}

/* 03.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/
console.log('3 uzduotis-------------------')
let num2=10
while(num2<=50){
    if(num2%2===0 ){
        console.log('poriniai skaiciai:',num2)
    }
    num2++
}

/* 04.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
console.log('4 uzduotis-------------------')
let num3=10
while(num3<=50){
    if(num3%2===0 && num3%10 !== 0){
        console.log(num3)
    }
    num3++
}
/* 05.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/
console.log('5 uzduotis-------------------')
let poriniai = 0
for(let i=0;i <=20; i++){
    if(i%2 === 0){
        poriniai++
    }
}console.log(`Nuo 0 iki 20 yra ${poriniai} poriniu skaiciu`)

/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/
console.log('sunkesni 1 uzduotis-------------------')
let atsitiktinis = 0
let didesni = 0  
let atsitiktiniai=[]
for(let i =0; i<300; i++){
 atsitiktinis = Math.floor(Math.random()*300 +1)
 if(atsitiktinis > 275){
    atsitiktiniai.push("[",atsitiktinis,"]")
 } else {  atsitiktiniai.push(atsitiktinis," ")  
  }
 
 if(atsitiktinis > 150){
    didesni++
 }
} console.log(atsitiktiniai.join(" "))
console.log("didesni uz 150: ",didesni)
/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/
console.log('sunkesni 2 uzduotis-------------------')
let arr =[]
for(let i = 0; i < 3000; i++){
    if(i%77 === 0){
        arr.push(i)
    } 
}console.log(arr.join(',').slice(0,-1) + '.')

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.

* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/
console.log('sunkesni 3 uzduotis-------------------')

for(let i = 0; i < 10; i++ ){
   let star = " * "
    console.log(star.repeat(10) )
}