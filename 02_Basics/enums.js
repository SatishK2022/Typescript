// enum SeatChoice {
//     AISLE,
//     MIDDLE,
//     WINDOW,
//     FOURTH
// }
// const Seat = SeatChoice.AISLE
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    name: "Satish",
    email: "satish@gmail.com",
    password: "12345",
    role: Roles.admin
};
var user2 = {
    name: "Nageneder",
    email: "nagender@gmail.com",
    password: "12345",
    role: Roles.user
};
var isAdmin = function (user) {
    var name = user.name, email = user.email, role = user.role;
    return role === 'admin' ? "".concat(name, " is allowed to edit the website") : "".concat(name, " is not allowed to edit the website");
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
