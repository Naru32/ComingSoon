
//! Datatypes are used to define what kind of data a variable can hold

//? there are mainly two types of datatypes 
// 1. Primitive 2. Non-primitive

//? Primitive data types
//! number

let a = 10
console.log(typeof(a) + " " + a);

let b = 120.455
console.log(typeof(b) + " " + b);

//! string

let c = "Narendra";
console.log(c);

let d = 'Mahalle';
console.log(d);

//! Boolean

let e = true
console.log(e);

let f = false;
console.log(f);

//! undefined
let g;
console.log(g);

//! Null;

let comm = null;
console.log(comm);

let stipend = null;
console.log(stipend);

//! symbol

// let u = Symbol('Narendra')
// console.log(u);

//! BigInt 

let population = 343443333n
console.log(population + typeof(population));

//? non primitive datatypes
//! array

let arr = [1,2,3,4,5,6] // homogenious array
console.log(arr);

let arr1 = [1,'3','s',"NArendra",3,5, true,null] //heterogenious
console.log(arr1);

//! objects

let obj = {
    name : "Shivam",
    age:29,
    city:"Beed"
}

console.log(obj);

let k = new Object()
k.Name = "Narendra";
k.age = 28;

console.log(k);

//! Functions

function abc(a,c,m){
    return a + c + m;
}

console.log(abc(10,20,30));

const add = function(length,weight,height){
    return length * weight * height;
}

console.log(add(10,2,4));

console.log(typeof(k));
