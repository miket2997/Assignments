// sum

//const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const result1 = nums.reduce(function(final, num){
    //final += num
    //return final
//})
//console.log(result1);



// reduce the users to an array of strings of the user's first and last names

//const users = [
    //{ fName: "joe", lName: "smithy" },
    //{ fName: "tina", lName: "johnson" },
    //{ fName: "rick", lName: "sanchez" }
//];

//const result = users.reduce(function(final, user){
    //final.push(user.fName + " " + user.lName)
    //return final
//}, [])
//console.log(result);


// reduce the array into a count of how many people voted


//const voters = [
    //{ name: "steve", voted: true },
   // { name: "janet", voted: true },
   // { name: "rebecca", voted: false },
   // { name: "harvey", voted: true },
//]

//const voteCount = voters.reduce(function(final, voter){
    //if(!voter.voted){
        //final++
   // }
  //  return final
//}, 0)
//console.log(voteCount);


// return an object that has a count of both who voted and who didnt

//const voterObject = voters.reduce(function(final, voter){
    //if(voter.voted){
        //final.didVote++
    //}else {
        //final.didntVote++
    //}
    //return final
//}, {didVote: 0, didntVote: 0})

//console.log(voterObject);

/////////////////////////////////////////////////////////////////////////////////////

// Turn an array of numbers into a total of all the numbers


const firstArray = [1, 2, 3];

const sum = firstArray.reduce(function(final, num){
    final += num
    return final
})
console.log(sum);


// Turn an array of numbers into a long string of all those numbers.

const arry = [1, 2, 3];

const longString = arry.reduce(function(final, num){
    return final + num
}, '')
//const longString = arry.reduce((final, num) => final + num, '')
console.log(longString)

//const secondArray = [1, 2, 3];
//const longString = secondArray.join("");
//console.log(longString);




// Turn an array of voter objects into a count of how many people voted

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];


const voteCount = voters.reduce(function(final, voter){
    if(voter.voted){
        final++
    }
    return final
}, 0)
console.log(voteCount);



// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once


var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const cost = wishlist.reduce(function(final, list){
    return final + list.price
}, 0)
console.log(cost);




// Given an array of arrays, flatten them into a single array



var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


const flatten = arrays.reduce(function(final, arr){
    return final.concat(arr)
})

console.log(flatten);



// Given an array of potential voters, return an object representing the results of the vote



var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const voterResults = (inVoters) => {
    const voteObject = inVoters.reduce((final, voter) => {
      if(voter.age >= 18 && voter.age <= 25 && voter.voted) {
        final.numYoungVotes++;
      }
      if(voter.age >= 18 && voter.age <= 25) {
        final.numYoungPeople++;
      }
      if(voter.age >= 26 && voter.age <= 35 && voter.voted) {
        final.numMidVotesPeople++;
      }
      if(voter.age >= 26 && voter.age <= 35) {
        final.numMidsPeople++;
      }
      if(voter.age >= 36 && voter.age <= 55 && voter.voted) {
        final.numOldVotesPeople++;
      }
      if(voter.age >= 36 && voter.age <= 55) {
        final.numOldsPeople++;
      }
      return {...final};
    }, {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0
    });
    return voteObject;
  };
console.log(voterResults(voters))  



