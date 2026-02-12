// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";


let dbLocation = central(5);

dbLocation.then((db)=>{
  console.log(`The user is in ${db}`)
})


function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
}


