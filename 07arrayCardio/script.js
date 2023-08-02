// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];


  // Some and Every Checks
  // Array.prototype.some() // 
console.log("is at least one person 19 or older?")
function check19(obj){
    obj.year
    let age = Number(new Date().getFullYear()) - obj.year
    return age > 18
}
console.log(people.some(check19))
  // Array.prototype.every() //
console.log('is everyone 19 or older?')
console.log(people.every(check19))
  // Array.prototype.find()
console.log("find the comment with the ID of 823423")
const comment = comments.find(comment => comment.id === 823423)
console.log(comment.text)
  // Array.prototype.findIndex()
console.log('Find the comment with this ID')
const index = comments.findIndex(comment => comment.id === 823423)
  // delete the comment with the ID of 823423
comments.splice(index, 1)
console.table(comments)
