for(let i = 11; i <= 20; i++) {
    console.log(i);
}
for(let i = 20; i >= 11; i--) {
    console.log(i);
}

let names = ['Edvards', 'Raivis', 'Emīls', 'Edgars', 'Kristaps'];

console.log(names[0]);
console.log(names[2]);

let length = names.length;

for(let i = 1; i < length + 1; i++) {
    console.log(i + '. ' + names[i - 1]);
}