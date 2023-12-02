function obliczPrzyszlaDate(event) {
    event.preventDefault();
    const dataStart = new Date(document.getElementById('dataStart').value);
    const lata = parseInt(document.getElementById('lata').value);
    const miesiace = parseInt(document.getElementById('miesiace').value);
    const dni = parseInt(document.getElementById('dni').value);

    const rok = dataStart.getFullYear() + lata;
    const miesiac = dataStart.getMonth() + miesiace;
    const dzien = dataStart.getDate() + dni;
    const przyszlaData = new Date(rok, miesiac, dzien);

    const wynikElement = document.getElementById('wynik');
    let tekst = '';

    if (lata === 0 && miesiace === 0 && dni === 0) {
        tekst = `${przyszlaData.toLocaleDateString()}`;
    } else {
        tekst = 'Data za';

        if (lata > 0) {
            tekst += ` ${fLata(lata, 'rok')}`;
        }

        if (miesiace > 0) {
            if (lata > 0 && dni > 0) {
                tekst += `, ${fMiesiac(miesiace, 'miesiąc')}`;
            } else if (lata > 0 && dni == 0) {
                tekst += ` i ${fMiesiac(miesiace, 'miesiąc')}`;
            } else {
                tekst += ` ${fMiesiac(miesiace, 'miesiąc')}`;
            }
        }
        if (dni > 0) {
            if (lata > 0 || miesiace > 0) {
                tekst += ` i ${fDzien(dni, 'dzień')}`;
            } else {
                tekst += ` ${fDzien(dni, 'dzień')}`;
            }
        }

        tekst += `: ${przyszlaData.toLocaleDateString()}`;
    }

    wynikElement.textContent = tekst;

    // Dodanie tekstu do atrybutu data-date
    wynikElement.setAttribute('data-date', przyszlaData.toLocaleDateString());
}

function fLata(liczba, jednostka) {
    if (liczba === 1) {
        return `${liczba} ${jednostka}`;
    } else if (liczba > 1 && liczba < 5) {
        return `${liczba} ${jednostka = "lata"} `;
    } else if (liczba > 4) {
        return `${liczba} ${jednostka = "lat"} `;
    }
}

function fMiesiac(liczba, jednostka) {
    if (liczba === 1) {
        return `${liczba} ${jednostka}`;
    } else if (liczba > 1 && liczba < 5) {
        return `${liczba} ${jednostka = "miesiące"} `;
    } else if (liczba > 4) {
        return `${liczba} ${jednostka = "miesięcy"} `;
    }
}

function fDzien(liczba, jednostka) {
    if (liczba === 1) {
        return `${liczba} ${jednostka}`;
    } else if (liczba > 1 && liczba < 5) {
        return `${liczba} ${jednostka = "dni"} `;
    } else if (liczba > 4) {
        return `${liczba} ${jednostka = "dni"} `;
    }
}

function skopiujDate() {
    const wynikElement = document.getElementById('wynik');
    const dataDoSkopiowania = wynikElement.getAttribute('data-date');

    // Stworzenie elementu do kopiowania
    const tempInput = document.createElement('input');
    tempInput.value = dataDoSkopiowania;

    // Dodanie elementu do DOM
    document.body.appendChild(tempInput);

    // Zaznaczenie tekstu w elemencie
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    // Kopiowanie tekstu do schowka
    document.execCommand('copy');

    // Usunięcie tymczasowego elementu
    document.body.removeChild(tempInput);

    
}

function podswietlDate() {
    const wynikElement = document.getElementById('wynik');
    wynikElement.style.color = 'rgb(61, 61, 254)';
}

function resetujPodswietlenie() {
    const wynikElement = document.getElementById('wynik');
    wynikElement.style.color = 'blue';
}




const obecnaData = new Date();

const rok = obecnaData.getFullYear();
const miesiac = (obecnaData.getMonth() + 1).toString().padStart(2, '0');
const dzien = obecnaData.getDate().toString().padStart(2, '0');

const dataString = `${rok}-${miesiac}-${dzien}`;

document.getElementById('dataStart').value = dataString;