const number = 10
console.log(10)

const obj = {
    name:'siva',
    age:21,
    gender:'male',
    isAlive:true,
    favouriteSports:['cricket','football']
}

function findKey(obj){
    if('name' in obj){
        return obj.name
    }else{
        return 'Not Found'
    }
}
console.log(findKey(obj))

console.log(obj)
console.log(obj.name)
console.log(obj.favouriteSports[1])

const array = [1,2,3,4,5]
console.log(array) // before push
array.push(6)
console.log(array) // after push

const popTheArray = [1,2,3,4,5]
console.log(popTheArray)// before pop
popTheArray.pop()
console.log(popTheArray)// after pop

const mapTheArray = [1,2,3,4,5]
console.log(mapTheArray)// before map
const result = mapTheArray.map(num => num*2)
console.log(result)// after map  //returns the same array

const ages = [12,22,34,35]
const ageResult = ages.filter(CheckAdult)
console.log(ageResult) //returns a new array
function CheckAdult(age){
    return age >=18
}

function addTwoNumbers(a,b){
    return a + b
}
console.log(addTwoNumbers(1,2))

console.log(a)
var a = 10
console.log(a)
