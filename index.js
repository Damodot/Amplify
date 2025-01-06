let database = JSON.parse(localStorage.getItem('userData')) || []
let nameOne = document.getElementById('firstName')
let nameTwo = document.getElementById('lastName')
let passOne = document.getElementById('password')
let passTwo = document.getElementById('confirm-password')
let nameThree= document.getElementById('email')
let output = document.querySelector('.reply')
let onlyBtn = document.getElementById('signUpBtn')

function togglePasswordVisibility() {
    let passwordInput = document.getElementById('password')
    let toggleIcon = document.getElementById('toggle-icon')

if (passwordInput.type === 'password') {
    passwordInput.type = 'text'
    toggleIcon.src = 'visoff.png'
} else {
    passwordInput.type = 'password'
    toggleIcon.src = 'vison.png'
}
}

let countDown = () => {
    setTimeout(() => {
        output.innerHTML = ``
    }, 2000);
}
let spaceChange = () => {
    onlyBtn.innerHTML = `Sign Up`
    onlyBtn.disabled = false
}

let checkVal = () => {
    onlyBtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`
    onlyBtn.disabled = true

    let users = database.find((index) => {
        return index.email.trim() === nameThree.value.trim()
    })
    console.log(users);

    setTimeout(() => {
        if (!nameOne.value.trim() || !nameTwo.value.trim() || !nameThree.value.trim() || !passOne.value.trim() || !passTwo.value.trim()) {
            output.innerHTML = `<h5 class="text-center text-danger">Please all fields mandatory</h5>`
            countDown()
            spaceChange()
            return;
        } 

        if (passOne.value.trim() !== passTwo.value.trim()) {
            output.innerHTML = `<h5 class="text-center text-danger">Passwords don't match</h5>`
            countDown()
            spaceChange()
            return;
        } 

        if  (users) {
            output.innerHTML = `<h5 class="text-center text-danger">Account already exists</h5>`
            countDown()
            spaceChange()
            setTimeout(() => {
                window.location.href = `login.html`
            }, 2000);
            return;
        }

        output.innerHTML = `<h5 class="text-center text-success">Account creation successful</h5>`
        countDown()
        spaceChange()
        let userInfo = {
            name: nameOne.value.trim(),
            lastName: nameTwo.value.trim(),
            email: nameThree.value.trim(),
            password: passOne.value.trim()
        }
        database.push(userInfo)
        console.log(database);
        localStorage.setItem('userData' , JSON.stringify(database))
        setTimeout(() => {
            window.location.href = `login.html`
        }, 2000);
    }, 1500);
}