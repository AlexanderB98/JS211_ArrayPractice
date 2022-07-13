const cars = ['Ford', 'BMW', 'Mercedes', 'Chevy']
console.log(cars)

let carsLen = cars.length
console.log('The length of the array is ', carsLen)

const moreCars = ['Saab', 'Volvo', 'Buick', 'Honda']
let totalCars = cars.concat(moreCars)
console.log('The concatenated array is', totalCars)

let hondaIndex = totalCars.indexOf('Honda')
console.log('The index of Honda is ',hondaIndex)

let fordLastIndexOf = totalCars.lastIndexOf('Ford')
console.log(



