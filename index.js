require('colors');
const {crearAlumne} = require('./helpers/hores');
console.clear;
console.log(process.argv);
let nom = process.argv[2];
nom = nom.split("=")[1]; 
let hores = process.argv[3];
hores = hores.split("=")[1];

crearAlumne(nom,hores);
