const form = document.querySelector('.form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const errorElement = document.querySelectorAll('.error');
const date = document.querySelectorAll('.date-js');
const time = document.querySelectorAll('.time-js');

form.addEventListener('submit', (e)=>{
    let error = false;
    if (name.value === "" || name.value == null){
        errorElement[0].classList.remove('error--off');
        error = true;
    } else {
        errorElement[0].classList.add('error--off');
    }

    if (email.value === "" || email.value == null){
        errorElement[1].classList.remove('error--off');
        error = true;
    } else {
        errorElement[1].classList.add('error--off');
    }

    date.forEach((element, index) => {
        if (element.value === "" || element.value == null){
            errorElement[2].classList.remove('error--off');
            error = true;
        } else {
            errorElement[2].classList.add('error--off');
        }
    })

    time.forEach((element, index) => {
        if (element.value === "" || element.value == null){
            errorElement[3].classList.remove('error--off');
            error = true;
        } else {
            errorElement[3].classList.add('error--off');
        }
    })

    if (error){
        e.preventDefault();

        // errorElement.innerText = error.join(', ');
    }
})
