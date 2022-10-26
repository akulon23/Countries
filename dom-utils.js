const createInfoElement = (labelName, value) => {
    const infoElement = document.createElement("div");


    const labelElement = document.createElement("strong");
    labelElement.innerText = `${labelName}:`;
    const valueElement = document.createElement("span");
    valueElement.innerText = value;

    infoElement.appendChild(labelElement);
    infoElement.appendChild(valueElement);

    return infoElement;
}

const createFlagImgElement = (country) => {
    const imgContainerElement = document.createElement("div");
    const imgElement = document.createElement("img");
    imgElement.src = country.flagUrl;
    imgElement.alt = `${country.name}flag`;

    imgContainerElement.appendChild(imgElement);

    return imgContainerElement;
}

const createCountryItemElement = (country) => {
    const countryElement = document.createElement("li");

    countryElement.appendChild(createFlagImgElement(country));

    const infoContainerElement = document.createElement('div');
    infoContainerElement.classList.add("info-container");

    const countryNameElement = document.createElement("strong");
    countryElement.classList.add('country-name');
    countryNameElement.innerText = country.name;

    infoContainerElement.appendChild(countryNameElement);

    infoContainerElement.appendChild(
        createInfoElement("Population", country.population));
    infoContainerElement.appendChild(
        createInfoElement("Region", country.region));
    infoContainerElement.appendChild(
        createInfoElement("Capital", country.capital));

    countryElement.appendChild(infoContainerElement);

    return countryElement;
};

const createListElement = (countries) => {
    const ListElement = document.createElement("ul");
    countries.forEach((country) => {
        ListElement.appendChild(createCountryItemElement(country));
    });

    return ListElement;


}

export const renderCountriesList = (countries) => {
    const rootElement = document.querySelector("#root");
    rootElement.innerHTML = "";
    rootElement.appendChild(createListElement(countries));
};

