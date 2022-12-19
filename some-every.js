/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr) {}
var x=[];
      var i=l;
      while(x.push(i++)<r){};
      return x;        
    


console.log(numbers(10, 19));
/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(num) {}
 val = num;

    while (val >= 10) {
        if ((val % 10) == 0) {
            return 1;
        }
        val = val / 10;
    }

    return 0;

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr) {}
const numbers = [8, 19, 5, 6, 14, 9, 13];


const odds = numbers.filter((num) => num % 2 === 1);

console.log(odds); // [19, 5 , 9, 13]
/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr) {}
for (var i = 0; i < myArray.length; i++) 
        {
            for (var j = 0; j < myArray.length; j++) 
            {
                if (i != j) 
                {
                    if (myArray[i] == myArray[j]) 
                    {
                        return true; 
                    }
                }
            }
        }
        return false; 
/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

function hasCertainKey(arr, key) {}
for (const obj of arr) {
    if (key in obj) { return true; }
  }
  return false;


console.log(arrayHasKey(arrOfObj, "mainKey2"))
console.log(arrayHasKey(arrOfObj, "mainKey10"))
/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

function hasCertainValue(arr, key, searchValue) {}
[
    {
        key: 'blah',
        value: 'Blah Blah'
    },
    {
        key: 'foo',
        value: 'Foos'
    },
    {
        key: 'bar',
        value: 'Bars'
    },
    {
        key: 'baz',
        value: 'Bazingo'
    }
];