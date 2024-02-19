// * Objects

// const User = {
//     name: "Satish",
//     email: "satish@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "Satish", isPaid: false, email: "satish@gmail.com"}

// createUser(newUser)

// function createCourse(): {name: string, price: number}{
//     return {name: "ReactJS", price: 399}
// }

// * Type Alasis

// type bool = boolean

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "Satish", email: "satish@gmail.com", isActive: true})

//* 'readonly' keyword and optional field using '?' 
//? for example - creditCardDetails?: number;

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creaditCardDetails?: number;
    readonly hobbies: string[];
}

let myUser: User = {
    _id: "12345",
    name: "Satish",
    email: "satish@gmail.com",
    isActive: false,
    hobbies: ["reading", "traveling"]
}

myUser.email = "satish@satish.dev"
// myUser._id = "o33009od" //! cannot update this because it is assigned to readonly

myUser.hobbies.push("Dancing") //? In case of array we can push the values in readonly
console.log(myUser)


type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardDate & cardDate & {
    cvv: number
}




export {}