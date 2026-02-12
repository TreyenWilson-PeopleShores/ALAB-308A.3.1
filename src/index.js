// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";


let dbLocation = central(5);

dbLocation.then(function(db){
  console.log(`The user is in ${db}`)
})

//getUserData(1)


 /*new Promise(function (resolve, reject){
  console.log("Initial")
  return resolve()
})
  .then(function (){
    throw new Error("Something failed");
    console.log("Do this")
  })*/


    let name = await vault(8);
    //db1 needs 1 - 4
    //db2 needs 4 - 7
    //db3 7-10
    // db has company info
    // vault has personal info
    console.log("Test", name);
    let completedData = [{id:0, name: "Name", username: "username", email: "e@mail.com", address:{street: "street", suite: "suite", city: "city", zipcode: "zipcode", geo:{lat:"lat", lng: "lng"}}, phone: "phone", website: "website", company:{name: "companyName", catchPhrase: "catchPhrase", bs: "string"}}]
  //
  console.log(completedData[0]);
  //

getUserData(5)

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
  console.log(dbs);
  //const returnedValue = await central(id);
  //console.log(returnedValue);
  return central(id).then(function(db){
    console.log(db);
    return db;
  })
  console.log(db);
}







//const myPromise = new Promise((resolve, reject) => {
  //  setTimeout(() => {
    //    resolve("Guess this worked!");
   // }, 1000);
//});

//getUserData(5)
//  .then(function(x){
//    console.log(x);
// })
