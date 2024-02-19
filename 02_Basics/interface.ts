interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string
    startTrial(): string,
    getCoupon(couponName: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const user1: Admin = {
    dbId: 12345,
    email: "satish@gmail.com",
    userId: 23,
    role: "admin",
    githubToken: "github",
    startTrial: () => {
        return "Trial Started"
    },
    getCoupon: (name: "satish10", off: 10) => {
        return 10
    }
}

export { }