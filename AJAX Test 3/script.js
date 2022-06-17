let btn = document.getElementById("btn");

const getData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return data;
}

btn.addEventListener("click", () => {

    getData().then(data => {
        let country = data[Math.floor(Math.random() * 250)];

        let center = document.getElementById("center");

        let flagSource = country.flags.png;


            // console.log(flagSource);

        const countryCard = document.createElement('div');

        const countryCardName = document.createElement('div');
        countryCardName.innerHTML = country.name.common;

        const countryFlag = document.createElement('img');
        countryFlag.src = flagSource;
        countryFlag.height = 20;
        countryFlag.width = 30;


        countryCard.appendChild(countryFlag);
        countryCard.appendChild(countryCardName);


        center.appendChild(document.createElement('br'));
        center.appendChild(countryCard);
    });    
        
});