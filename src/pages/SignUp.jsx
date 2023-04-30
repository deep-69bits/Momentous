import React from 'react'
import { useState } from 'react'
import {app} from '../components/firbase'
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import { motion } from "framer-motion";


const SignUp = () => {
  
  const history = useHistory();

  const [name,setName]=useState('');
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmpassword,setConfirmPassword]=useState('')
  const [errormessage,setErrorMessage]=useState('')
  const [load,setLoad]=useState('')
  const [def,setDef]=useState(false)
  const auth = getAuth(app);
   
  const signup=()=>{
    console.log("hello")
    if(password!=confirmpassword){
      toast("Passwrod doesn't match")
    }
    else{

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast("Signed Up")
        const user = userCredential.user;
        user.displayName=name;
        console.log(user)
        setTimeout(function(){history.push('/')}, 2000);
      })
      .catch((error) => {
        toast("Can't Sign Up ")
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
  }
  const specialchar=[
    '~','`',`!`,`@`,'#','$','%','^','&','*','(',')','_','-','?','}','{','[',']','<','>','/'
  ]
  const capital=[
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
  ]
  const numbers=[
    '1','2','3','4','5','6','7','8','9','0'
  ]
  const checkingpassword=(e)=>{
    setPassword(e.target.value)
    setLoad('')
    let a=0,b=0,c=0;
    for(let i=0;i<password.length;i++){
       let ch=password[i];
       specialchar.forEach(element => {
          if(element===ch){a=1;}
       });
       capital.forEach(element => {
        if(element===ch){b=1;}
       });
       numbers.forEach(element => {
        if(element===ch){c=1;}
       });  
    }
    console.log(a," ",b," ",c)
    if(a!=1 || b!=1 || c!=1 || password.length<8){
      setErrorMessage("Passowrd must contain a special character/number/capital letter and lenght greator than 7... ")
      setDef(false)
    }
    else{
      setErrorMessage('')
      setDef(true)
    }
   
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        history.push('/')
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  })
  return (
    <motion.div
    className=""
    initial={{ opacity: 0, y: "-1000px" }}
    animate={{ opacity: 1, y:"0" }}
    exit={{ opacity: 1, y: "1000px"}}
    transition={{ duration: 0.5 }}
    >
    <section className="gradient-form h-full min-h-screen  flex items-center bg-neutral-200">
    <ToastContainer />
  <div className="container h-full p-10 m-auto">
    <div
      className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-300">
      <div className="w-full">
        <div
          className="block rounded-lg bg-white  shadow-lg dark:bg-neutral">
          <div className="g-0 lg:flex lg:flex-wrap">
           
            <div className="px-4 md:px-0 lg:w-6/12">
              <div className="md:mx-6 md:p-12">
                
                <div className="text-center bg-white text-black">
                <a href="/">
                <img
                className="mx-auto w-56"
                src="https://ik.imagekit.io/cmef8hxb6/1_Transparent_Image_VWmbhlojN.png?updatedAt=1681756446542"
                alt="logo" />
                </a>
                 
                </div>

                <form>
                  <p className="mb-4 text-black">Signup to a new account</p>
                 
                  <div className="relative mb-4 mt-2" data-te-input-wrapper-init>
                  <label for="1" class="block px-2 my-2 w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Name</label>
                      <input
                      type="text"
                       placeholder="Name"
                       className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white text-black mx-2 focus:ring-2 focus:ring-blue-400"
                       value={name}
                       onChange={(e)=>{
                        setName(e.target.value)
                        setLoad('')
                       }}
                       />
                    
                  </div>

                  <div className="relative mb-4 mt-2" data-te-input-wrapper-init>
                  <label for="1" class="block px-2 my-2 w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Email</label>
                    <input
                      type="email"
                      className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white text-black mx-2 focus:ring-2 focus:ring-blue-400"
                      id="exampleFormControlInput1"
                      placeholder="Email"
                      value={email}
                      onChange={(e)=>{
                        setEmail(e.target.value)
                        setLoad('')
                        
                      }}
                      
                      />
                  </div>

                  
                  <div className="relative mb-4 mt-2" data-te-input-wrapper-init>
                  <label for="1" class="block px-2 my-2 w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Password</label>
                    <input
                      type="password"
                      className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white text-black mx-2 focus:ring-2 focus:ring-blue-400"
                      id="exampleFormControlInput11"
                      placeholder="Password" 
                      value={password}
                      onChange={checkingpassword}
                      />
                   
                  </div>
                  <span className='text-sm text-red-500 mx-8 translate-y-[-5px]'>{errormessage}</span>

                  <div className="relative mb-4 mt-2" data-te-input-wrapper-init>
                  <label for="1" class="block px-2 my-2 w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Confirm Password</label>
                    <input
                      type="password"
                      className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white text-black mx-2 focus:ring-2 focus:ring-blue-400"
                      id="exampleFormControlInput11"
                      placeholder="Confirm Password" 
                      value={confirmpassword}
                      onChange={
                        (e)=>{
                          setConfirmPassword(e.target.value)
                          setLoad('')
                        }
                      }
                      />
                   
                  </div>

                 
                  <div className="mb-12 pb-1 pt-1 text-center">

                   {
                    def?
                    <button
                      onClick={signup}
                      className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] bg-pink-500 text-white"
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      SIGNUP
                    </button>
                    :
                    <button
                      onClick={signup}
                      className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] bg-pink-300 text-white"
                      type="button"
                      disabled={true}
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      SIGNUP
                    </button>
                   }
                   

                    
                   
                  </div>

                  
                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2 text-black">Already  have an account?</p>
                    <button
                      type="button"
                      onClick={()=>{history.push('/login')}}
                      className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600  focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700  bg-pink-500 font-bold"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      LOGIN
                    </button>
                  </div>
                </form>
              </div>
            </div>

          
            <div
              className="bg-gradient-to-r flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
              <div className="px-4 py-6 text-white md:mx-6 md:p-12">
              <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_hy4txm7l.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </motion.div>
  )
}

export default SignUp