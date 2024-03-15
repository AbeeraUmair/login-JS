function signup() {
    var email = document.getElementById('semail').value
    var pass = document.getElementById('spass').value
    localStorage.setItem('Email', email)
    localStorage.setItem('Password', pass)
    location.href = './signin.html'
}

function signin() {
    var email = document.getElementById('lemail').value
    var pass = document.getElementById('lpass').value
    if (localStorage.getItem('Email') == email &&
        localStorage.getItem('Password') == pass)
        {
              location.href = './welcome.html'
        }          
        
    else {
        location.href = './tryagain.html'
    }
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("spass");
    var icon = document.querySelector('.toggle-password');

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      passwordInput.type = "password";
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  }
  
  function togglePasswordVisibilitya() {
    var passwordInput = document.getElementById("lpass");
    var icon = document.querySelector('.toggle-password');

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      passwordInput.type = "password";
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  }