// DEFINING VARIABLES
const form = document.querySelector('.col-2 form');
const inputs = document.querySelectorAll('.col-2 form input');


// WHEN CLICK ON SUBMIT
    // on click validate
form.addEventListener('submit', (e) => {
	e.preventDefault();
	inputs.forEach((input) => {
		// console.log(input.value);
		if (!input.value) {
            // add error class to input 
            input.parentElement.classList.add('error');
        }else {
            // removes error class to input in case filled
            input.parentElement.classList.remove('error');
            // In case email input
            if(input.type == 'email') {
                // run validate email function
                if (validateEmail(input.value)) {
                    // if email format correct
                    input.parentElement.classList.remove('error');
                } else {
                    // if not correct
                    input.parentElement.classList.add('error');
                }
            }
        }
	});
});

// EMAIL VALIDATION
function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}