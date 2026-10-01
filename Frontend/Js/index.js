const createAccountBtn = document.querySelector('#create-account');
createAccountBtn.addEventListener("click", () => {
  window.location.href = "/signup";
});

document.querySelector('#login-btn').addEventListener('click', async() =>{
  const userData = {
    email : document.querySelector('#username').value,
    password : document.querySelector('#password').value,
  };

  try{
    const response = await fetch("http://localhost:3000/", {
      method: 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(userData)
    });
    if(!response.ok){
      throw new Error("Unable to login");
    }
    const data = await response.json();
    console.log(data.message);
  }catch(error){
    console.error(error);
  }
});