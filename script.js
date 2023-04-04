// 0: 21
// 1: 23
// 2: 21
// 3: 27
// 4: 29
// length: 5
// let addArray=[1,3,1,7,9];
// let addArray2=addArray.map(el=>el+20);
// console.log(addArray2);

// Метод filter
// (2) [7, 9]
// let filterArray=[1,3,1,7,9];
// let filterArray2=filterArray.filter(el=> el===7 || el===9);
// console.log(filterArray2);

// Метод reduce
// 189
// let reduceArray=[1,3,1,7,9];
// let reduceArray2=reduceArray.reduce((total,current)=>total*current);
// console.log(reduceArray2);

// Метод fined
// 6
// let findArray=[6,7,3,9,5,10,15];
// let findArray2 = findArray.find(el=> el<15);
// console.log(findArray2);

// Метод findIndex
// 6
// let fiArray=[27,7,3,9,5,10,15];
// let fiArray2 = fiArray.findIndex(el=> el==15);
// console.log(fiArray2);

// Метод indexOf
// 3
// let colors = ["Yellow", "Pink", "Blue", "Green"];
// let result = colors.indexOf("Green");
// console.log(result);

// Метод push
// (8) [6, 7, 15, 9, 5, 10, 7, 14]
// let arr=[6,7,15,9,5,10,7];
// let pushed=arr.push(14);
// console.log(pushed);
// console.log(arr);

// Метод pop
//(6) [6, 7, 15, 9, 5, 10]
// let arr=[6,7,15,9,5,10,7];
// let del=arr.pop();
// console.log(del);
// console.log(arr);

// Метод shift
// (6) [6, 7, 15, 9, 5, 10]
// let arr=[6,7,15,9,5,10,7];
// let del=arr.pop();
// console.log(del);
// console.log(arr);

// Метод unshift
// (10) [5, 6, 7, 6, 7, 15, 9, 5, 10, 7]
// let arr=[6,7,15,9,5,10,7];
// let unshifted=arr.unshift(5,6,7);
// console.log(unshifted);
// console.log(arr);

// Метод splice
// (5) ['Daniil', 'Denis', 'Vitalik', 'Anton', 'Maksim']
// let arr = ['Daniil', 'Denis', 'Vitalik','Anton','Denis'];
// arr.splice(4,1,'Maksim');
// console.log(arr);

// Метод slice
// (3) ['Denis', 'Vitalik', 'Anton']
// let arr = ['Daniil', 'Denis', 'Vitalik','Anton','Denis'];
// let sliced=arr.slice(1,4);
// console.log(sliced);

// Метод sort
// (5) [1, 5, 12, 25, 28]
// let arr = [25, 12, 1,28,5];
// let sorted=(firstEl,secondEl)=>firstEl-secondEl;
// arr.sort(sorted);
// console.log(arr);

document.write("Масив1"+"</br>");
let mas1=[];
for (let i=0; i<10; i++) {
mas1[i]= Math.random();
document.write(mas1[i]+'</br> ');
}

document.write("Масив2"+"</br>");
let mas2=[];
for (let i=0; i<10; i++) {
mas2[i]= Math.random()*10;
document.write(mas2[i]+'</br> ');
}


let mas3=[];
document.write("Масив3"+"</br>");
for (let i=0; i<10; i++) {
mas3[i]=Math.round(Math.random()*10);
document.write(mas3[i]+'</br> ');
}