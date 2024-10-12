const spaces = document.querySelectorAll("input")
const spans = document.querySelectorAll("span")
const emailRegex = /^\w+([-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const modal = document.querySelector('#div-modal-all')

const forms = document.querySelector("#form")
const input_name = document.querySelector("#inpt-name")
const input_date = document.querySelector("#inpt-date")
const input_phone = document.querySelector("#inpt-phone")
const input_mail = document.querySelector("#inpt-mail")
const input_role = document.querySelector("#inpt-role")
const input_salary = document.querySelector("#inpt-salary")
const boxes = document.querySelector("tbody")
const btn_submit = document.getElementById('btn-modal-submit')
const title_name = document.querySelector('#h1-title')
const btn_update = document.querySelector('#btn-update')
const div_header = document.querySelector('.div-header')
const div_main = document.querySelector('.div-main')

const btnNewMember = document.querySelector('#btn-submit-add')
const btnCloseModal = document.querySelector('#btn-modal-cancel')
 
const body = document.body

function openModal(){
    modal.style.display = 'block'
    btn_submit.style.display = 'block'
    btn_update.style.display = 'none'

    div_header.style.opacity = "0.2";
    div_main.style.opacity = "0.2";
}

function closeModal(){
    div_header.style.opacity = "100";
    div_main.style.opacity = "100";

    modal.style.display = 'none'
    spaces[0].style.border = "";
    spans[0].style.display = "none";
    spaces[1].style.border = "";
    spans[1].style.display = "none";
    spaces[2].style.border = "";
    spans[2].style.display = "none";
    spaces[3].style.border = "";
    spans[3].style.display = "none";
    spaces[4].style.border = "";
    spans[4].style.display = "none";
    spaces[5].style.border = "";
    spans[5].style.display = "none";

    spaces[0].value = '', 
    spaces[1].value = '', 
    spaces[2].value = '', 
    spaces[3].value = '', 
    spaces[4].value = '', 
    spaces[5].value = ''

    title_name.innerHTML = 'Novo Funcionário'
    btn_submit.textContent = 'Cadastrar';
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

  function isValidAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(spaces[1].value);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth()
  
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1 >= 18;
    }
    return age >= 18;
  }

// VALIDAÇÃO NO SITE
  function inputName(){
    if(spaces[0].value.length == ''){
        spans[0].textContent = "Campo Obrigatório";
        spans[0].style.color = 'red';
        spans[0].style.display = "block";
        spaces[0].style.border = "2px solid #e63636";
    }else if(spaces[0].value.length < 3){
        spans[0].textContent = "Insira um nome válido";
        spans[0].style.color = 'red';
        spans[0].style.display = "block";   
        spaces[0].style.border = "2px solid #e63636";
    }else{
        spans[0].style.display = "none";
        spaces[0].style.border = "";
    }
  }
  function inputDate(birthdate){
    if(spaces[1].value == ''){
        spans[1].textContent = "Campo Obrigatório";
        spans[1].style.color = 'red';
        spans[1].style.display = "block";
        spaces[1].style.border = "2px solid #e63636";
    }else if (!isValidAge(birthdate)) {
        spans[1].textContent = 'Você precisa ter pelo menos 18 anos';
        spans[1].style.color = 'red';
        spans[1].style.display = "block";
        spaces[1].style.border = "2px solid #e63636";
    } else {
        spans[1].textContent = '';
        spaces[1].style.border = 'none';
    } 
  }

  function inputMail() {
    if(spaces[2].value.length == ''){
        spans[2].textContent = "Campo Obrigatório";
        spans[2].style.color = 'red';
        spans[2].style.display = "block";
        spaces[2].style.border = "2px solid #e63636";
    }else if(!emailRegex.test(spaces[2].value)) {
        spans[2].textContent = "Insira um E-mail válido";
        spans[2].style.color = "red";
        spans[2].style.display = "block";
        spaces[2].style.border = "2px solid #e63636";
    } else {
        spans[2].style.display = "none";
        spaces[2].style.border = "";
    }
  }

  function inputTel(){
    if(spaces[3].value == ''){
        spans[3].textContent = "Campo Obrigatório";
        spans[3].style.color = 'red';
        spans[3].style.display = "block";
        spaces[3].style.border = "2px solid #e63636";
    }else if(spaces[3].value.length < 15){
        spans[3].textContent = "Insira um número válido";
        spans[3].style.color = 'red';
        spans[3].style.display = "block";
        spaces[3].style.border = "2px solid #e63636";
    }else{
        spans[3].style.display = "none";
        spaces[3].style.border = "";
    }
  }
  function inputRole(){
    if(spaces[4].value == ''){
        spans[4].textContent = "Campo Obrigatório";
        spans[4].style.color = 'red';
        spans[4].style.display = "block";
        spaces[4].style.border = "2px solid #e63636";
    }else if(spaces[4].value.length < 1){
        spans[4].textContent = "Insira um cargo válido";
        spans[4].style.color = 'red';
        spans[4].style.display = "block";
        spaces[4].style.border = "2px solid #e63636";
    }else{
        spans[4].style.display = "none";
        spaces[4].style.border = "";
    }
  }
  function inputSalary(){
    if(spaces[5].value == ''){
        spans[5].textContent = "Campo Obrigatório";
        spans[5].style.color = 'red';
        spans[5].style.display = "block";
        spaces[5].style.border = "2px solid #e63636";
    }else if(spaces[5].value.length < 1){
        spans[5].textContent = "Insira um salário válido";
        spans[5].style.color = 'red';
        spans[5].style.display = "block";
        spaces[5].style.border = "2px solid #e63636";
    }else{
        spans[5].style.display = "none";
        spaces[5].style.border = "";
    }
  }
  
const user_list = JSON.parse(localStorage.getItem("users"))  || []

function submitForm(e, birthdate) {
    e.preventDefault();
    
    if (input_name.value === '' || input_date.value === '' || input_mail.value === '' || input_phone.value === '' || input_role.value === '' || input_salary.value === '') {
        inputName()
        inputDate(birthdate)
        inputTel()
        inputMail()
        inputRole()
        inputSalary()
    } else {
        const objeto_usuario = {
            username_object: input_name.value.trim(),
            date_object: input_date.value.trim(),
            mail_object: input_mail.value.trim(),
            phone_object: input_phone.value.trim(),
            role_object: input_role.value.trim(),
            salary_object: input_salary.value.trim()
        };
        
        user_list.push(objeto_usuario);
        localStorage.setItem("users", JSON.stringify(user_list));
        
        input_name.value = '';
        input_date.value = '';
        input_mail.value = '';
        input_phone.value = '';
        input_role.value = '';
        input_salary.value = '';
        
        closeModal()
        buscarDados();
    }
}

function buscarDados() {
    boxes.innerHTML = '';
    const user_list = JSON.parse(localStorage.getItem("users")) || [];
    user_list.forEach((user_current, index) => {
        const tr = document.createElement('tr')

        tr.innerHTML = `
            <td>${user_current.username_object}</td>
            <td>${user_current.date_object}</td>
            <td>${user_current.mail_object}</td>
            <td>${user_current.phone_object}</td>
            <td>${user_current.role_object}</td>
            <td>R$ ${user_current.salary_object}.00</td>
            <td>
                <button class="action" id='btn-edit' onclick="editElement(${index})"><i class="bi bi-pencil-square"></i></button>
            </td>

            <td>
                <button class="action" id='btn-delete' onclick="deleteElement(${index})"><i class="bi bi-trash3-fill"></i></button>
            </td>
        `
        boxes.append(tr)
    });
}

function deleteElement(index){
    user_list.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(user_list)) || []
    buscarDados()
}

function teste(){
    console.log('Erro')
}

function editElement(index) {
    const user_list = JSON.parse(localStorage.getItem("users")) || [];
    const current = user_list[index];

    openModal()

    input_name.value = current.username_object;
    input_date.value = current.date_object;
    input_mail.value = current.mail_object;
    input_phone.value = current.phone_object;
    input_role.value = current.role_object;
    input_salary.value = current.salary_object;

    btn_submit.style.display = 'none';

    title_name.innerHTML = 'Atualizar Cadastro'
    
    btn_update.style.display = 'block';
    btn_update.style.cursor = 'pointer'

    btn_update.onclick = (e) => {
        e.preventDefault();
 
        if (!isValidAge() || input_name.value === '' || input_date.value === '' || input_mail.value === '' || input_phone.value === '' || input_role.value === '' || input_salary.value === '') {
            inputName()
            inputTel()
            inputDate()
            inputMail()
            inputRole()
            inputSalary()
        } else {
            current.username_object = input_name.value.trim();
            current.date_object = input_date.value.trim();
            current.mail_object = input_mail.value.trim();
            current.phone_object = input_phone.value.trim();
            current.role_object = input_role.value.trim();
            current.salary_object = input_salary.value.trim();
            
            user_list[index] = current;
            localStorage.setItem('users', JSON.stringify(user_list));

            input_name.value = '';
            input_date.value = '';
            input_mail.value = '';
            input_phone.value = '';
            input_role.value = '';
            input_salary.value = '';
            
            btn_update.style.display = 'none';
            btn_submit.style.display = 'block';
            title_name.innerHTML = 'Novo Funcionário'
            closeModal()
            buscarDados();
        }
    };
}

forms.addEventListener("submit", submitForm);
input_phone.addEventListener('input', handlePhone);
document.addEventListener('DOMContentLoaded', buscarDados);

btnNewMember.addEventListener('click', openModal)
btnCloseModal.addEventListener('click', closeModal)