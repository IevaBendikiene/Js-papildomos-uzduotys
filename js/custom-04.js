/* 01.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/
let augalai =["Vysnia","Slyva","Obelis","tresne","serbentas","agrastas","braske","pomidoras","rope","agurkas"]
/* 02.
Atspausdinkite kiekvieną pirmo uždavinio augalą atskiroje eilutėje.
*/
for(let augalas of augalai){
    console.log(augalas)
}

/* 03.
Atspausdinkite pirmo uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/
for(let i = 9; i>0; i--){
    console.log(augalai[i])
}

/* 04.
Suskaičiuokite kiek pirmo uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/
let mazesni5 = 0
let ilgesni7= 0
for(let augalas of augalai){
    if(augalas.length<5){
        mazesni5++
    }else if(augalas.length>7){
        ilgesni7++
    }
    
}console.log("Trumpesni nei 5 raides:",mazesni5,"Ilgesni nei 7 raides:",ilgesni7)
