let score: number | string = 33

score = 44
score = "55"

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let satish: User | Admin = {name: "Satish",id: 23}

satish = {username: "Satish", id: 345}

// function getDbId(id: string | number) {
//     // Making some api calls
//     console.log(`DB id is ${id}`)
// }

getDbId(454)
getDbId("3453gdd")

function getDbId(id: string | number) {
    if (typeof id === "string") {
        id.toLowerCase()
    } else {
        id + 2
    }
}

//* array

const data1: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (number | string | boolean)[] = [1, 2, 3, 4, 5, '6', true]

let seatAllotment: "aile" | "middle" | "window"

seatAllotment = "aile"
// seatAllotment = "crew"