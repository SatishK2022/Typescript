// enum SeatChoice {
//     AISLE,
//     MIDDLE,
//     WINDOW,
//     FOURTH
// }

// const Seat = SeatChoice.AISLE

enum Roles {
    user = "user",
    admin = "admin"
}

type LoginDetails = {
    name: string;
    email: string;
    password: string;
    role: Roles
}

const user1: LoginDetails = {
    name: "Satish",
    email: "satish@gmail.com",
    password: "12345",
    role: Roles.admin
}

const user2: LoginDetails = {
    name: "Nageneder",
    email: "nagender@gmail.com",
    password: "12345",
    role: Roles.user
}

const isAdmin = (user: LoginDetails) => {
    const {name, role} = user;
    return role === 'admin' ? `${name} is allowed to edit the website` : `${name} is not allowed to edit the website`
}

console.log(isAdmin(user1))
console.log(isAdmin(user2))