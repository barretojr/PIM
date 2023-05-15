function generateUsername() {
    var nameInput = document.getElementById("name");
    var usernameInput = document.getElementById("username");
    var nameValue = nameInput.value;
    nameValue = nameValue.trim();
    var nameParts = nameValue.split(" ");
    if (nameParts.length > 1) {
        var firstName = nameParts[0];
        var lastName = nameParts[nameParts.length - 1];
        firstName = firstName.toLowerCase();
        lastName = lastName.replace(/\s/g, "");
        var username = firstName + "_" + lastName;
        usernameInput.value = username;
    }
}

function validateForm() {
    var passwordInput = document.getElementById("password");
    var passwordConfirmInput = document.getElementById("passwordconfirm");
    
    var password = passwordInput.value;
    var passwordConfirm = passwordConfirmInput.value;
    
    if (password !== passwordConfirm) {
        alert("As senhas não coincidem. Por favor, verifique novamente.");
        return false;
    }
    
    return true;
}