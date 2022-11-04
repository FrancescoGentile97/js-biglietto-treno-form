const userNameEl = document.getElementById('user-name');
const userKmEl = document.getElementById("user-km");
const userAgeEl = document.getElementById("user-age");
const btnGenerateEl = document.getElementById("btn-generate");
const btnAnnullaEl = document.getElementById("btn-annulla");
const discountLabel = document.getElementById("sconto");
const priceLabel = document.getElementById("price-label");
const wagonLabel = document.getElementById("wagon");
const codeLabel = document.getElementById("code");


const priceForKm = .21;


let userName;
let userKm;
let userAge;
let price;
let discount;
let finalPrice;

btnGenerateEl.addEventListener("click", function (){
    if (userNameEl.value === "") {
        alert("Inserisci il tuo nome");
    } else if (isNaN(userNameEl.value) == false) {
        alert("Inserire un nome utente valido");
    } else if (userNameEl.value.lenght <= 3) {
        alert("Inserisci un nome valido")
    } else if (parseInt(userKmEl.value) === 0) {
        alert("Inserisci i km da percorrere");
    } else if (parseInt(userKmEl.value) <= 0) {
        alert("Inserisci un numero di km valido")


        userName = userNameEl.value;
        userKm = parseInt(userKmEl.value);
        userAge = parseInt(userAgeEl.value);
        price = userKm * priceForKm;

        if (userAge === 1) {
            discount = price * .2;
            discountLabel.innerHTML = "Biglietto Scontato"
        } else if (userAge === 3) {
            discountLabel.innerHTML = "Biglietto Super Scontato"
            discount = price * .4;
        } else {
            discount = 0;
            discountLabel.innerHTML = "Biglietto Standard"
        }

        finalPrice = (Math.round((price - discount) * 100) / 100).toFixed(2);

        ticket.classList.replace("");
        userNameEl.innerHTML = userName;
        let randomA = Math.ceil(Math.random() * 20);
        wagonLabel.innerHTML = randomA;
        let randomB = Math.round(Math.random() * 100000);
        codeLabel.innerHTML = randomB;
        priceLabel.innerHTML = `€${finalPrice}`;
        
    }});

    // da aggiungere gli innerhtml per stampare il generate sul biglietto