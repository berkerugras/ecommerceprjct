const authServices = require("../services/authServices");
const server=require("../app")
const chai = require("chai");
const chaiHttp = require("chai-http");
const should=chai.should();

const { expect } = chai;
chai.use(chaiHttp);
// describe("SignUpTesting", () => {
//     before((done) =>{
//         chai.request(server)
//             .post('./auth/signup')
//             .send({})
//     })
//     var PostSignUp=authServices.postSignUpServices
//     it("Should Correctly send a post Sign Up request", function(){
//
//     })
//  })

// describe("SignInTesting", () => {
//     before((done) =>{
//         chai.request(server)
//             .post('./auth/signin')
//             .send({req.body.user_password})
//     })
//     var PostSignUp=authServices.postSignUpServices
//     it("Should Correctly send a post Sign Up request", function(){
//
//     })
// })
