const request = require("supertest")
const app = require("../index")

describe("get all todos", () => {
    it("should return all todos", async () => {
        const todos = await request(app).get("/todo");
        expect(todos.statusCode).toBe(200);
        console.log(todos.body.data)
        expect(JSON.stringify(todos.body)).toBe(JSON.stringify({"data": []}))
    })
})