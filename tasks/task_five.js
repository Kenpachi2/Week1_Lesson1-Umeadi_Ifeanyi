
let person = {
    name: "Ebube",
    age: 15,
    location: "Abuja"
  };
  
  console.log(person.name); //Nodemon Output: Ebube
  console.log(person["age"]); //Nodemon Output: 15
  
  person.age = 20;
  person["location"] = "Awka";
  
  console.log(person); //Nodemon Output: { name: 'Ebube', age: 20, location: 'Awka' }
  
  person.gender = "Male";
  person["occupation"] = "Engineer";
  
  console.log(person); //Nodemon Output: { name: 'Ebube', age: 20, location: 'Awka', gender: 'Male', occupation: 'Engineer' }
  