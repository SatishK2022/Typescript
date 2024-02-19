// const user: (string | number)[] = ["Satish", 2]

let user: [string, number, boolean]

user = ["Satish", 20, true]

let rgb: [number, number, number] = [255, 223, 54]

type User = [number, string]

const newUser: User = [112, "example@gmail.com"]

newUser[1] = "satish.dev"
// newUser.push(true) //! Cannot assign boolean