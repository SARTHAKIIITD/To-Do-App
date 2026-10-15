document.querySelector('#sign-up-btn').addEventListener('click', async() => {
  const email        = document.querySelector('#email');
  const username     = document.querySelector('#username');
  const password     = document.querySelector('#password').value;

  const userData = {
    email: email.value.trim(),
    username: username.value.trim(),
    password,
  };

  try{
    const response =  await fetch(
      'auth/signup',
      {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(userData)
    });

    const data = await response.json();

    if(!response.ok){
      throw new Error(data.message || 'Unable to create account');
    }
    alert(data.message);

    email.value = ``;
    username.value = ``;
    password.value = ``;
  }
  catch(err){
    console.error('Unable to send data \n', err);
  }
});