const authServices = require("../services/authServices");
const authController = require("../controllers/authController");
const router=require("../routes/auth")
// const jest=require('jest')

const {mockRequest,mockResponse,mockNext} = require("../util/interceptor");

describe('SignIn testing',()=>{
    test('Is post sign-in with works properly with correct credentials?',async ()=>{
        const req={
            session:{
                userid:"",
                userName:"",
                email:"",
                token:""
            },
            body:{
                email:"berker99@gmail.com",
                user_password:"demberker",
                user_name:"berkerok12"

            },
        }
        const res= { status: jest.fn().mockReturnThis(), send: jest.fn() };
        const next=jest.fn()
        await authController.postSignIn(req,res,next);
        expect(res.status).toBeCalledWith(302)
    })

    test('Is post sign-in with works properly with false credentials?',async ()=>{
        const req= {
            session: {
                userid: "",
                userName: "",
                email: "",
                token: ""
            },
            body: {
                email: "berker99@gmail.com",
                user_password: "demberk",
                user_name: "berkerok12"

            },
        }

        const res= { };
        const next=jest.fn()
        await authController.postSignIn(req,res,next);
        expect(next).toBeCalledWith(new Error('Username or password is incorrect'))

    })

    test('Is post sign-in with works properly with missing credentials?',async ()=>{
        const req= {
            session: {
                userid: "",
                userName: "",
                email: "",
                token: ""
            },
            body: {
                email: "berker99@gmail.com",
                user_password: "",
                user_name: "berkerok12"

            },
        }

        const res= { };
        const next=jest.fn()
        await authController.postSignIn(req,res,next);
        expect(next).toBeCalledWith(new Error('Email and password are required'))

    })
})

describe('SignUp testing',()=>{
    test('Is post sign-UP with works properly with correct credentials?',async ()=>{
        const req={
            session:{
                userid:"",
                userName:"",
                email:"",
                token:""
            },
            body:{
                first_name:randomstring(6),
                last_name:randomstring(6),
                email:randomstring(5)+"@gmail.com",
                user_password:"demberker",
                confirm_password:"demberker",
                user_name:randomstring(6)

            },
        }
        const res= { status: jest.fn().mockReturnThis(), send: jest.fn() };
        const next=jest.fn()
        await authController.postSignUp(req,res,next);
        expect(res.status).toBeCalledWith(302)
    })

    test('Is post sign-up  works properly with different passwords?',async ()=>{
        const req= {
            session: {
                userid: "",
                userName: "",
                email: "",
                token: ""
            },
            body: {
                first_name:randomstring(6),
                last_name:randomstring(6),
                email:randomstring(6)+"@gmail.com",
                user_password:"demberker",
                confirm_password:"asdasdd",
                user_name:"berkerok12"

            },
        }

        const res= { };
        const next=jest.fn()
        await authController.postSignUp(req,res,next);
        expect(next).toBeCalledWith(new Error('Passwords do not match.'))

    })

    test('Is post sign-up  works properly with missing credentials?',async ()=>{
        const req= {
            session: {
                userid: "",
                userName: "",
                email: "",
                token: ""
            },
            body: {
                first_name:"jerjas",
                last_name:"",
                email:"asdas@gmail.com",
                user_password:"demberker",
                confirm_password:"",
                user_name:"berkerok12"

            },
        }

        const res= { };
        const next=jest.fn()
        await authController.postSignUp(req,res,next);
        expect(next).toBeCalledWith(new Error('All fields required'))

    })

})



function randomstring(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}


