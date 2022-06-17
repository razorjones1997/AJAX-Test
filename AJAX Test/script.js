const showCountries = () => {

}

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v3.1/all', true);
    xhr.send();
    xhr.onload = () => {
        if(xhr.status === 200)
        {
            console.log("Success");
            let countries = JSON.parse(xhr.response);
            let country = countries[Math.floor(Math.random() * 250)];

            let center = document.getElementById("center");

            let flagSource = country.flags.png;


            // console.log(flagSource);

            const countryCard = document.createElement('div');

            const countryCardName = document.createElement('div');
            countryCardName.innerHTML = country.name.common;

            const countryFlag = document.createElement('img');
            countryFlag.src = flagSource;
            countryFlag.height = 20;
            countryFlag.width = 20;


            countryCard.appendChild(countryFlag);
            countryCard.appendChild(countryCardName);


            center.appendChild(document.createElement('br'));
            center.appendChild(countryCard);

        }
    }
})