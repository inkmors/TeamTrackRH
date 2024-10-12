const screen_reg = document.querySelector('.screen-register')
const screen_log = document.querySelector('.screen-login')
const form = document.querySelector('form')
const btnsAll = document.querySelectorAll('button')
const inputs = document.querySelectorAll('input')
const error_span = document.querySelectorAll('span')
const spansAll = document.querySelectorAll('.spansAll')
const emailRegex = /^\w+([-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function login(){
    const loginInputs = [0, 1]
    loginInputs.forEach(index => {
        inputs[index].style.border = 'none'
        inputs[index].value = ''
    })
    error_span[0].style.display = 'none'
    screen_reg.style.display = 'none';    
    screen_log.style.display = 'block'
}

function createAccount() {
    const registerInputs = [2, 3, 4, 5, 6]
    registerInputs.forEach(index => {
        inputs[index].style.border = 'none'
        inputs[index].value = ''
    });
    error_span[3].style.display = 'none'
    screen_log.style.display = 'none'
    screen_reg.style.display = 'block'
}

function showError(inputIndex, errorMessage) {
    if (inputs[inputIndex].value === '') {
        error_span[0].style.display = 'none';
        inputs[inputIndex].style.border = "2px solid #e63636";
        error_span[0].style.display = 'block';
        error_span[0].textContent = errorMessage;
    } else {
        inputs[inputIndex].style.border = 'none';
    }
}

function showErrorRegister(inputIndex, errorMessage) {
    if (inputs[inputIndex].value === '') {
        error_span[3].style.display = 'none';
        inputs[inputIndex].style.border = "2px solid #e63636";
        error_span[3].style.display = 'block';
        error_span[3].textContent = errorMessage;
    } else {
        inputs[inputIndex].style.border = 'none';
    }
}

const handlePhone = (event) => {
    let input = event.target;
    input.value = phoneMask(input.value);
  };

const phoneMask = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

function rePasswordError(){
    if(inputs[6].value != inputs[5].value){
        inputs[6].style.border = "2px solid #e63636";
        error_span[3].style.display = 'block'
        error_span[3].textContent = 'As senham não estão iguais'
    }else if(inputs[6].value == ''){
        inputs[6].style.border = "2px solid #e63636";
        error_span[3].style.display = 'block'
    }else{
        inputs[6].style.border = 'none';
        error_span[3].style.display = ''
    }
}

function validatorInputRegister(){
    event.preventDefault();

    if ((inputs[2].value, inputs[3].value, inputs[4].value, inputs[5].value, inputs[6].value == '') || inputs[6].value != inputs[5].value) {
        showErrorRegister(2, 'Campo obrigatorio')
        showErrorRegister(3, 'Campo obrigatorio')
        showErrorRegister(4, 'Campo obrigatorio')
        showErrorRegister(5, 'Campo obrigatorio')
        rePasswordError()
    }else{
        const login_data = {    
            username_object: inputs[2].value.trim(),
            mail_object: inputs[3].value.trim(),
            phone_object: inputs[4].value.trim(),
            password: inputs[5].value.trim(),
            repassword: inputs[6].value.trim()
        }
        const users = JSON.parse(localStorage.getItem("users"))  || []
        const existingUser = users.find(user => user.mail_object === login_data.mail_object);

        if (existingUser) {
            error_span[3].style.display = 'block'
            error_span[3].textContent = 'E-mail já registrado'
            inputs[3].style.border = '2px solid red'
        } else {
            users.push(login_data);
            localStorage.setItem('users', JSON.stringify(users));

            error_span[3].style.display = 'none'

            const InputsValidatorRegister = [2, 3, 4, 5, 6]
            InputsValidatorRegister.forEach(index => {
                inputs[index].style.border = 'none'
                inputs[index].value = ''
            });

            login()
        }
    }
}

function validatorInputLogin() {
    event.preventDefault();
    if(inputs[0].value == '' && inputs[1].value == ''){
        showError(2, 'Usuário ou senha inválidos')   
    }else if (inputs[0].value == '' || inputs[1].value == '') {
        showError(0, 'Informe seu usuário')
        showError(1, 'Informe sua senha') 
    } else {
        const email = inputs[0].value.trim();
        const password_const = inputs[1].value.trim();
        
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(user => user.mail_object === email);
        
        if (user) {
            if (user.password === password_const) {
                window.location.href = "../Gestão_Funcionarios/index.html";
            } else {
                error_span[0].style.display = 'block';
                error_span[0].textContent = 'Senha incorreta';
                inputs[1].style.border = "2px solid #e63636";
                inputs[1].value = ''
            }
        } else {
            error_span[0].style.display = 'block';
            error_span[0].textContent = 'Email não registrado';
            inputs[0].style.border = "2px solid #e63636";
        }
    }
}

inputs[4].addEventListener('input', handlePhone);

btnsAll[0].addEventListener('click', validatorInputLogin)
btnsAll[1].addEventListener('click', validatorInputRegister)

spansAll[0].addEventListener('click', ()=>{
    alert('Funcionalidade ainda em criação^^')
})

spansAll[1].addEventListener('click', createAccount)
spansAll[2].addEventListener('click', login)

