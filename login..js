let database = JSON.parse(localStorage.getItem('userData')) || []
let databaseNew = JSON.parse(localStorage.getItem('regUser')) || []
console.log(database);
let email = document.getElementById('email')
let password = document.getElementById('password')
let output = document.querySelector('.reply')
let onlyBtn = document.querySelector('.logBtn')

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
    onlyBtn.innerHTML = `Login`
    onlyBtn.disabled = false
}

let checkDets = () =>{
    onlyBtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`
    onlyBtn.disabled = true

    let user = database.find((index) => {
        return index.email === email.value.trim()
    })
    if (user) {
        databaseNew.push(user)
    }
    console.log(databaseNew);
    localStorage.setItem('regUser' , JSON.stringify(databaseNew))

    setTimeout(() => {
        if (!email.value.trim() || !password.value.trim()) {
            output.innerHTML = `<h5 class="text-center text-danger">All fields are mandatory</h5>`
            countDown()
            spaceChange()
            console.log(password.value.trim());
            return;
        } 

        if (!user) {
            output.innerHTML = `<h5 class="text-center text-danger">User information not recognized</h5>`
            countDown() 
            spaceChange()
            setTimeout(() => {
                window.location.href = `index.html`
            }, 2000);
            return;
        }

        if (user.email !== email.value.trim() || user.password !== password.value.trim()) {
            output.innerHTML = `<h5 class="text-center text-danger">Invalid Username / Password</h5>`
            countDown()
            spaceChange()
            return;
        }   
        output.innerHTML = `<h5 class="text-center text-success">Login Successfull</h5>`
        countDown()
        spaceChange()
        setTimeout(() => {
            window.location.href = `dashboard.html`
        }, 2000);
    }, 1500);
}