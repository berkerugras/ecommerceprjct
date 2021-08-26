const authController = require("../controllers/authController");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe("Server!", () => {
    it("Testing Sign-Up", done => {
    chai
        .request(authController)
        .get()
        .end()
    });
});
