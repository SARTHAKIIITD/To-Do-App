// function task1(){
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve("task 1 is completed");
//     },3000);
//   });
// }

// function task2(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("task 2 is completed");
//     },2000);
//   });
// }

// async function tasks(){
//   const task1res = await task1();
//   console.log(task1res);
//   const task2res = await task2();
//   console.log(task2res);
// }

// tasks();

async function createAccount(){
  console.log("create account button was clicked");
  const userEmail = document.querySelector('#email').value;
    const userName = document.querySelector('#username').value;
    const userPassword = document.querySelector('#password').value;

    const userData = {
        email : userEmail,
        name : userName,
        password : userPassword 
    };

    try{
      console.log(typeof(userData));
      const response = await fetch("http://localhost:3000/signup", {
        method: 'POST',
        headers : {
          'content-type' :'application/json'
        },
        body : JSON.stringify(userData)
      });

      if(!response.ok){
        throw new Error("Unable to send data");
      }

      const data = await response.json();
      console.log(data.message);
    } 
    catch(error){
      console.log(error);
    }
}

const signupBtn = document.querySelector('#sign-up-btn');
signupBtn.addEventListener("click",createAccount);