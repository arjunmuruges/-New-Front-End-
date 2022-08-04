const form =document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit',e=>
{
    if(!validateEmail(emailVal))
    {
        form.classList.remove('error');
    }
    else{
        form.classList.remove('error');
        document.body.innerHTML='<div style="display:flex; align-items:center"';
    }
});

function validateEmail(email)
{
    // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|)
    return re.test(String(email).toLowerCase());
}