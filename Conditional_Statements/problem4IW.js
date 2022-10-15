//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let database_username="xyz@gmail.com";
let database_password="789xyz";

let username="xyz@gmail.com";
let password="789xyz";

if (database_username == username){
  if (database_password ==password){
    console.log("Login Successfull");
  } else {
    console.log("Incorrect Password");
  }
} else{
  console.log("Wrong Credentials");
}