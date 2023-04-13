function generate(){
    for(let i=0;i<10; i++){
        console.log(Math.random());

    }
}

const arr=[1,2,3];
let x=0;
for(const x of arr){
    console.log(x);
}

// Question - 1
// Filter Duplicates
// Input is an array of objects
// Each object has a property called id,
// and a username.
// Write a function that takes in an array of objects, and returns an array of objects
// with no duplicates.

// Example:

const input1=[{id:1, userName:"Doe"},
{id:2, userName:"John"},
{id:3, userName:"Doe"},
{id:4, userName:"hello"},
{id:5, userName:"world"},
];

const removeDuplicates=(arrayOfObjects)=>{
const  hasSeen={};
const result=[];
for (const item of arrayOfObjects){
    console.log(hasSeen[item.userName]);
    if(!hasSeen[item.userName]){
        result.push(item);
    }
hasSeen[item.userName]=true;
}
return result;
}
console.log(removeDuplicates(input1));

// Question - 2
// Add to array only if it doesn't exist
// Input is an array of objects and an object
const input2=[{id:1, userName:"ravi"},
{id:2, userName:"ramya"},
{id:3, userName:"ravali"},
{id:4, userName:"rahul"},

]
const itemToAdd={id:5,userName:"john"};
const addToArray= (arrayOfObjects,itemToAdd)=>{
    const hasSeen={};
for(const item of arrayOfObjects){
hasSeen[item.userName]=true;
}
if(!hasSeen[itemToAdd.userName]){
    arrayOfObjects.push(itemToAdd);
}
return arrayOfObjects;
}
console.log(addToArray(input2,itemToAdd));