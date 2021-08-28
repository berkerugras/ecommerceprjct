const authServices = require("../services/authServices");
const authController = require("../controllers/authController");
const router=require("../routes/auth")
// const jest=require('jest')

const {mockRequest,mockResponse,mockNext} = require("../util/interceptor");

describe('SignIn testing',()=>{
    test('Is post signin works properly?',async ()=>{
        const req=mockRequest({
            body:{
                email:"berker99@gmail.com",
                user_password:"demberker",
                user_name:"berkerok12"

            },
        })
        const res=mockResponse()
        const next=mockNext()
        await authController.postSignIn(req,res,next);

        expect(res.send()).toHaveBeenCalledTimes(1)


    })
})


// describe("GET /auth/signup", ()=>{
//     it("it should show Sign Up page",(done)=>{
//         chai.request(router)
//             .get("/signup")
//             .end((err,response)=>{
//                 response.should.have.status(200);
//                 response.body.should.be.a('object');
//                 done();
//             }).catch(done);
//     })
//
// })


