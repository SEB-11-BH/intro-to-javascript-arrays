
// Declaring an Array
// Ordered Collection of values

const myStudents = ['Abdulrahman','Nawaf','Noora']


console.log(myStudents)

// access a value in my array

console.log(myStudents[0])



// .length
console.log(myStudents.length)


// pop(): Remove the last value in the array
myStudents.pop()

console.log(myStudents)


// push(): add an element to the end of the array

myStudents.push('Ali')

console.log(myStudents)


// shift(): removes the first element

myStudents.shift()

console.log(myStudents)


// unshift(): adds to the beggening of array
myStudents.unshift('Mohammad')

console.log(myStudents)


const techonologies = ['HTML','CSS','JavaScript']


techonologies.push('Python')
techonologies.unshift('Node')

console.log(techonologies)

const techologiesCopy = techonologies

techologiesCopy.push('ALI')

console.log('technology', techonologies)


console.log('technologyCppy', techologiesCopy)


console.log(myStudents)
// splice(startingPoint, deleteCount)

myStudents.splice(0,1)

console.log(myStudents)


myStudents.splice(1,1,'new 1','new 1','new 3')

console.log(myStudents)


function something(){
    return 5
}

console.log(something())


const myNums = [1,5,10,20]
const secondNums = [20,30,40,50]


console.log(myNums[1] +secondNums[0])


myStudents.splice(1,3)
myStudents.splice(1,0,'Munther','Shahad')


console.log(myStudents)


// console.log(myStudents[2])

// Looping through an array
for(let i = 0; i< myStudents.length; i++ ){
    console.log(myStudents[i])
}


// for of loop

for( let anything of myStudents){
  console.log(anything)  
}


console.log(myStudents)


myStudents[1] = 'Andulrahman'

console.log(myStudents)

// get the last element in the array
console.log(myStudents[myStudents.length -1])

console.log(myStudents.at(-1))




// includes and indexOf

console.log(myStudents.includes('Nawaf'))

console.log(myStudents.indexOf("Nawaf"))



/* 
Methods that Mutate Array:

pop
push
shift
unshift
splice


DONT Mutate
*/


const firstTwoStudents = myStudents.slice(0,2)



console.log(firstTwoStudents)


for(let student of myStudents){
  console.log(student)
}

// forEach()
myStudents.forEach(
  function(oneStudent){console.log(oneStudent)})

myStudents.forEach(oneStudent => console.log(oneStudent))


let myScentence = "Good Morning Class"

console.log(myScentence.split('ing'))


console.log(myStudents.join(' '))