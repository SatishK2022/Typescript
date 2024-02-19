"use strict";
// * Objects
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "12345",
    name: "Satish",
    email: "satish@gmail.com",
    isActive: false,
    hobbies: ["reading", "traveling"]
};
myUser.email = "satish@satish.dev";
// myUser._id = "o33009od" // cannot update this because it is assigned to read only
myUser.hobbies.push("Dancing");
console.log(myUser);
