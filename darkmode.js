function toggleDarkMode(event) {
    event.preventDefault();
    var element = document.body;
    element.classList.toggle("dark-mode");
    var darkButton = document.getElementById("darkmode");

    if (element.classList.contains("dark-mode")) {
        darkButton.innerHTML = "&#127773;";
        localStorage.setItem("darkMode", "enabled");
    } else {
        darkButton.innerHTML = "&#127770;";
        localStorage.setItem("darkMode", "disabled");
    }

    if (localStorage.getItem("darkMode") === "enabled") {
        toggleDarkMode();
    }

    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
        } else {
            sessionStorage.clickcount = 1;
        }

        

        if (sessionStorage.clickcount == 5) {
            element.classList.add("gradient");
            darkButton.innerHTML = "&#127773;";
            localStorage.setItem("darkMode", "enabled");
        }
        if (sessionStorage.clickcount != 5) {
            element.classList.remove("gradient");
        }
        }else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        }
    }


       
            if (localStorage.getItem("darkMode") === "enabled") {
                toggleDarkMode(); 
        }
