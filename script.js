//1. Comparing two JSON 

function areObjectsEqual(obj1, obj2) {
  const sortedStr1 = JSON.stringify(obj1, Object.keys(obj1).sort());
  const sortedStr2 = JSON.stringify(obj2, Object.keys(obj2).sort());

  return sortedStr1 === sortedStr2;
}

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

if (areObjectsEqual(obj1, obj2)) {
  console.log("The JSON objects are equal.");
} else {
  console.log("The JSON objects are not equal.");
}



//2. Display all countries Flag

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open ("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
 const data = JSON.parse(xhr.response);
console.log(data);
for (let i = 0; i<data.length; i++) {
    console.log(data [i]. flag);
}
};


//3. Printing all countries Name, Region, Sub-region and Population

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open ("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
 const data = JSON.parse(xhr.response);
console.log(data);
for (let i = 0; i<data.length; i++) { 
  console.log(data[i].name.common);
  console.log(data [i].population);
  console.log(data [i].region);
  console.log(data [i].subregion);
    
}
};