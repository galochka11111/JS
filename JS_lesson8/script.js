/*
Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

- Напишіть код,  котрий :
-- отримує текст з параграфа з id "content"*/

let a=document.getElementById('content');
console.log(a)

/*-- отримує текст з блоку з id "rules"*/

let b=document.getElementsByClassName('fc bp');
console.log(b)

/*-- замініть текст параграфа з id 'content' на будь-який інший*/

document.getElementById('content').innerText="Навча́ння — організована, двостороння діяльність, спрямована на максимальне засвоєння й усвідомлення навчального матеріалу та подальшого застосування отриманих знань, умінь і навичок на практиці. Цілеспрямований процес передачі та засвоєння знань, умінь, навичок і способів пізнавальної діяльності людини."

/*-- замініть текст параграфа з id 'rules' на будь-який інший*/

let d=document.getElementsByClassName('fc_bp');
for (el of d){
    el.innerText='Навча́ння — організована, двостороння діяльність, спрямована на максимальне засвоєння й усвідомлення навчального матеріалу та подальшого застосування отриманих знань, умінь і навичок на практиці. Цілеспрямований процес передачі та засвоєння знань, умінь, навичок і способів пізнавальної діяльності людини.'
}

/*-- змініть кожному елементу колір фону на червоний*/

let c=document.getElementsByTagName('div');
for (el of c){
    el.style.background='red'
}
/*-- змініть кожному елементу колір тексту на синій*/

let e=document.getElementsByTagName('body');
for (el of e){
    el.style.color='blue'
}

/*-- отримати весь список класів елемента з id=rules і вивести їх в console.log*/

console.log(document.getElementById('rules').classList.keys())

/*-- поміняти колір тексту у всіх елементів fc_rules на червоний*/

let f=document.getElementsByClassName('fc_rules');
for (el of f){
    el.style.color='red'
}