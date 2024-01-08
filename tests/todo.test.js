const request = require("supertest")
const app = require("../index")

describe("get all todos", () => {
    it("should return all todos", () => {
        const todos = request(app).get("/todo")
    })
})