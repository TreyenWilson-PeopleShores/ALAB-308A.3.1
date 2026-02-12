// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";


//let dbLocation = central(5);

//dbLocation.then(function(db){
//  console.log(`The user is in ${db}`)
//})




    let name = await vault(8);
    //db1 needs 1 - 4
    //db2 needs 4 - 7
    //db3 7-10
    // db has company info
    // vault has personal info
    let completedData = [{id:0, name: "Name", username: "username", email: "e@mail.com", address:{street: "street", suite: "suite", city: "city", zipcode: "zipcode", geo:{lat:"lat", lng: "lng"}}, phone: "phone", website: "website", company:{name: "companyName", catchPhrase: "catchPhrase", bs: "string"}}]
  //



getUserData(3).then(function(x){ // NOT FINISHED - NEED TO LOWER TIME FROM 300 MS to 100 MS - CHECK WITH ALLAN
  console.log(x);
})


async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
  
  if(id>=1 && id<=10 && Number.isInteger(id)===true){
    let dataBaseLocation = await(central(id)) //this figures out which db it is located in
    
    const companyInfo = await dbs[dataBaseLocation](id);
    const personalInfo = await (vault(id));
    completedData[id] =  [{id:id, name: personalInfo.name, username: companyInfo.username, email: personalInfo.email, address:{street: personalInfo.address.street, suite: personalInfo.address.suite, city: personalInfo.address.suite, zipcode: personalInfo.address.zipcode, geo:{lat:personalInfo.address.geo.lat, lng: personalInfo.address.geo.lng}}, phone: personalInfo.phone, website: companyInfo.website, company:{name: companyInfo.company.name, catchPhrase: companyInfo.company.catchPhrase, bs: companyInfo.company.bs}}]

    //console.log("company", companyInfo, "personal", personalInfo);
    //console.log("Completed", completedData[id]);
    return completedData[id]
  }


}


