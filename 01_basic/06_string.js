const name = "Ankit Mishra"
const repoCount = 50


console.log(`Name: ${name} and repo count is: ${repoCount}`)


const gameName=new String('Game Masti')

console.log(gameName);
console.log(gameName[0]);
// console.table(
//     [
//         gameName,
//         gameName[0],
//         typeof typeof typeof gameName,
//         typeof Number([1]),
//         Number([1])
//     ]
// )


console.log(gameName.slice(1,4));

const subString= gameName.substring(0,4)
console.log(subString)

console.table(
    [
        gameName.substring(3,0),
    ]

)
