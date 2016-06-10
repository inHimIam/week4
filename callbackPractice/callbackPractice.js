//In this repo your job is to write functions to make each function call work properly.
//Below is a sample problem 

  //code here for sayHi
function sayHi(str, cb) {
  cb(str);
}
   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

//and what you should write is the sayHi function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    




  //Code Here for first
  var first = function(arr, cb) {
    cb(arr[0]);
  }

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
var last = function(last, cb) {
  debugger;
  cb(last[last.length - 1]);
}
last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
function multiply(x, y, callmeback) {
  callmeback(x * y);
}
multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains
  function contains(namesArray, theName, cBack){
    // First solution: 
    // for (var i = 0; i < namesArray.length; i++) {
    //   if (namesArray[i] === theName) {
    //     return cBack(true); 
    //   }
    // }
    
    // Second solution:
    if (namesArray.indexOf(theName) != -1) {
      return cBack(true);
    }else {
    
    return cBack(false);
    }
  }
  
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq
    
    function uniq(namesArray, cb) { 
      var tracker= {};
      for (var i = 0; i >= namesArray.length; i--) {
      if (newNames.indexOf(arr[i]) === undefined) {
        tracker[arr[i] === true];
      
    }else {
     newNames.splice(arr[i]); 
    }
      
    }
      return cb()

    }
   
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

indexOf



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each
function each() {
  
}
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById
function getUserById(theUser, findId, callBack) {
var user = findId.find(function(userObj){
  return findId === userObj.findId;
}
    
    
  }
  callBack(user);
};
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
