function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}





function checkAll() {
    var checkboxes = document.querySelectorAll('input[name="check"]');
    var wszystkieCheckbox = document.getElementById('wszystkie');

    checkboxes.forEach(function(checkbox) {
        checkbox.checked = wszystkieCheckbox.checked;
    });
}     



function generatePassword(event) {
    event.preventDefault();
    var length = document.getElementById("dlugosc").value;
    if (!length) {
        document.getElementById("generatedPassword").innerHTML = "<b>Podaj ilość znaków</b>";
        return;
    }
    if (length < 10 || length > 20) {
        document.getElementById("generatedPassword").innerHTML = "<b>Podaj ilość znaków od 10 do 20</b>";
        return;
    }
    var quantity = document.getElementById("ilosc").value;
    
    var includeLowerCase = document.getElementById("mlitera").checked;
    var includeUpperCase = document.getElementById("dlitera").checked;
    var includeDigit = document.getElementById("cyfra").checked;
    var includeSpecialChar = document.getElementById("zspecjalny").checked;
    var includeNoSimilarChar = document.getElementById("pznaki").checked;

    var characters = "";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var digitChars = "0123456789";
    var specialChars = "!@#$%^&*()_+[]{}|;:',.<>?";

    var characters2 = "";
    var lowercaseChars2 = "acdefhijkmnopqrstuvwxyz";
    var uppercaseChars2 = "ABCDEFHJKLMNPQRTUVWXY";
    var digitChars2 = "3478";
    var specialChars2 = "!@#$%^&*()_+[]{};:',.<>?";
    if (includeNoSimilarChar) {
        if (includeLowerCase) {
        characters2 += lowercaseChars2;
        }

        if (includeUpperCase) {
            characters2 += uppercaseChars2;
            }

        if (includeDigit) {
            characters2 += digitChars2;
            }

        if (includeSpecialChar) {
        characters2 += specialChars2;
        }
        var generatedPasswords = [];
        if (!characters2){
        document.getElementById("generatedPassword").innerHTML = "<b>Wybierz jakie znaki ma zawierać hasło</b>";
        return;
        
        }
        if (!quantity) {
            document.getElementById("generatedPassword").innerHTML = "<b>Podaj ile haseł wygenerować</b>";
            return;
        }
        if (quantity < 1) {
        
        document.getElementById("generatedPassword").innerHTML = "<b>Podaj poprawną ilość haseł do wygenerowania (minimum 1)</b>";
        return;
        }

        for (var j = 0; j < quantity; j++) {
        var password = "";
        while (password.length < length) {
            password += characters2.charAt(Math.floor(Math.random() * characters2.length));
        }
        generatedPasswords.push(password);
        }
    
    } 
    else{
    if (includeLowerCase) {
        characters += lowercaseChars;
    }

    if (includeUpperCase) {
        characters += uppercaseChars;
    }

    if (includeDigit) {
        characters += digitChars;
    }

    if (includeSpecialChar) {
        characters += specialChars;
    }
    if (!characters){
        document.getElementById("generatedPassword").innerHTML = "<b>Wybierz jakie znaki ma zawierać hasło</b>";
        return;
        
        
    }
    if (!quantity) {
        document.getElementById("generatedPassword").innerHTML = "<b>Podaj ile haseł wygenerować</b>";
        return;
    }
    if (quantity < 1) {
        
        document.getElementById("generatedPassword").innerHTML = "<b>Podaj poprawną ilość haseł do wygenerowania (minimum 1)</b>";
        return;
    }
    

    var generatedPasswords = [];

    for (var j = 0; j < quantity; j++) {
        var password = "";
        while (password.length < length) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        generatedPasswords.push(password);
    }
}

    if (quantity == 1) {
        document.getElementById("generatedPassword").innerHTML = "<h4>Wygenerowane hasło:</h4>";
        var passwordElement = document.createElement("div");
        passwordElement.classList.add("password");
        passwordElement.textContent = generatedPasswords[0];
        passwordElement.onclick = function() {
            copyToClipboard(generatedPasswords[0]);
        }
        document.getElementById("generatedPassword").appendChild(passwordElement);
    } else if (quantity > 1) {
        document.getElementById("generatedPassword").innerHTML = "<h4>Wygenerowane hasła:</h4>";
        generatedPasswords.forEach(function(pw) {
            var passwordElement = document.createElement("div");
            passwordElement.classList.add("password");
            passwordElement.textContent = pw;
            passwordElement.onclick = function() {
                copyToClipboard(pw);
            }
            document.getElementById("generatedPassword").appendChild(passwordElement);
        });
    }
    if (quantity == 1) {
    document.getElementById("Pobierz").innerText = "Pobierz hasło";
    } else if (quantity > 1) {
        document.getElementById("Pobierz").innerText = "Pobierz hasła";
    }
}

function downloadPasswords(event) {
    event.preventDefault();
    var generatedPasswords = document.getElementById("generatedPassword").innerText;
    if (generatedPasswords == "Wybierz jakie znaki ma zawierać hasło"){
        document.getElementById("generatedPassword").innerHTML = "<b>Brak hasła do pobrania</b>";
        return;
    }
    if (generatedPasswords == "Podaj ile haseł wygenerować"){
        document.getElementById("generatedPassword").innerHTML = "<b>Brak hasła do pobrania</b>";
        return;
    }
    if (generatedPasswords == "Podaj poprawną ilość haseł do wygenerowania (minimum 1)"){
        document.getElementById("generatedPassword").innerHTML = "<b>Brak hasła do pobrania</b>";
        return;
    }
    if (generatedPasswords == "Podaj ilość znaków"){
        document.getElementById("generatedPassword").innerHTML = "<b>Brak hasła do pobrania</b>";
        return;
    }
    if (generatedPasswords == "Podaj ilość znaków od 10 do 20"){
        document.getElementById("generatedPassword").innerHTML = "<b>Brak hasła do pobrania</b>";
        return;
    }
    if (generatedPasswords == "Brak hasła do pobrania"){
        document.getElementById("generatedPassword").innerHTML = "<b>Brak hasła do pobrania</b>";
        return;
    }
    if (generatedPasswords == ""){
        document.getElementById("generatedPassword").innerHTML = "<b>Brak hasła do pobrania</b>";
        return;
    }else{
    var blob = new Blob([generatedPasswords], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "wygenerowane_hasla.txt");
    }
}