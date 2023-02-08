/* 동물원에 동물이 3마리 있다.
각 동물별 정보는 이름, 종, 나이이다. */

// function Animal(name, species, age){
//     this.name = name;
//     this.species = species;
//     this.age = age;
// }

// let animals = [
//     new Animal('거북', '거북', 300),
//     new Animal('시베리아호랑이', '호랑이', 20),
//     new Animal('얼룩말', '말', 10)
// ]
// let animalsJSON = JSON.stringify(animals);

// /* 동물원의 돔울 전체 평균 나이를 구한다. */
// function getAvgByAge(objs, callback){
//     objs = JSON.parse(objs);
//     let totalAge = 0;
//     objs.forEach(obj => totalAge += obj.age);
//     if(callback){
//         return callback(totalAge);
//     }
//     return totalAge;
// }

// console.log(getAvgByAge(animalsJSON, totalAge => parseInt(totalAge/3)));
// console.log(parseInt(getAvgByAge(animalsJSON)/3));

// /* ============================ */

function Animal(name, species, age){
    this.name = name;
    this.species = species;
    this.age = age;
    // this.toJSON = JSON.stringify(this);
}

// let animalsJSON = [
//     new Animal('거북', '거북', 300).toJSON,
//     new Animal('시베리아호랑이', '호랑이', 20).toJSON,
//     new Animal('얼룩말', '말', 10).toJSON
// ]
let animalsJSON = JSON.stringify([
    new Animal('거북', '거북', 300),
    new Animal('시베리아호랑이', '호랑이', 20),
    new Animal('얼룩말', '말', 10)
]);

/* 동물원의 돔울 전체 평균 나이를 구한다. */

function getAvgByAge(inputJSON, callback){
    let objs = JSON.parse(inputJSON);
    let totalAge = objs.map(o => o.age).reduce((total, age) => total + age);
    if(callback){
        return callback(totalAge);
    }
    return totalAge;
}

console.log(getAvgByAge(animalsJSON, totalAge => parseInt(totalAge/3)));
