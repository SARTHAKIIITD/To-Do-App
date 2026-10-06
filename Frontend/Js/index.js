const createAccountBtn = document.querySelector('#create-account');
createAccountBtn.addEventListener("click", () => {
  window.location.href = "/signup";
});

document.querySelector('#login-btn').addEventListener('click', async() =>{
  const userData = {
    username : document.querySelector('#username').value,
    password : document.querySelector('#password').value,
  };

  try{
    const response = await fetch("http://localhost:3000/auth/login", {
      method: 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(userData)
    });
    if(!response.ok){
      throw new Error("Unable to login");
    }
    const data = await response.json(); // id
    console.log(data.message);

    const response2 = await fetch(`/login/${data.message}`, {
    });
      if(!response2.ok){
        throw new Error("Unable to retrive user data");
      }
      const data2 = await response2.json();
      console.log(data2.message);
      localStorage.setItem("todo", JSON.stringify(data2.message));
      localStorage.setItem("id", JSON.stringify(data.message));
      
      window.location.href = "/dashboard";
  }catch(error){
    console.error(error);
  }
});