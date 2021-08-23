const button = document.getElementById('button')

button.addEventListener('click',(event)=> {
  event.preventDefault()

  //alert('botao acionado')

  const email = document.getElementById('email')
  const password = document.getElementById('password')

  if (email.value==''){
    email.classList.add("errorInput")
  } else{
    email.classList.remove("errorInput")
  }

  if (password.value==''){
    password.classList.add("errorInput")
  } else{
    password.classList.remove("errorInput")
  }

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
    email.classList.add("errorInput")
  } else{
    email.classList.remove("errorInput")
  }

  if (!isNaN(email.value) == true && email.value.length == 11){
    email.classList.remove("errorInput")
  } 

  if(password.value.length <=5){
    password.classList.add("errorInput")
  } else{
    password.classList.remove.remove("errorInput")
  } 

})

let btn = document.querySelector('.fa-eye')

btn.addEventListener('click',()=>{
    let inputSenha = document.querySelector('#password')

    if(inputSenha.getAttribute('type') =='password'){
        inputSenha.setAttribute('type', 'text')
    } else{
        inputSenha.setAttribute('type', 'password')

    }
})