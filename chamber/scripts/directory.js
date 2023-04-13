const url = "scripts/data.json";

async function getCompanyData() {
  const response = await fetch(url);
  const data = await response.json();
  //   console.table(data.prophets); // note that we reference the prophet array of the data object given the structure of the json file
  displayProphets(data.companies);
}

const displayProphets = (companies) => {
  const cards = document.querySelector("div.cards"); // select the output container element

  companies.forEach((company) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let h3 = document.createElement("h3");
    let portrait = document.createElement("img");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let a = document.createElement("a");
    // let p5 = document.createElement("p");

    // Build the h2 content out to show the prophet's full name - finish the template string
    h3.textContent = `${company.companyname}`;

    // Build the p1 and p2 content out to show the prophet's birth date and birth place
    p1.textContent = `${company.address}`;
    p2.textContent = `${company.phone}`;

    // Build the p1 and p2 content out to show the prophet's birth date and birth place(stretch)
    p3.textContent = `${company.level}`;

    a.setAttribute("href", company.website);
    // a.setAttribute("src", company.website);

    // a.setAttribute("target", "_blank");
    a.textContent = `${company.website}`;
    // p5.textContent = `${"Number of Children:" + " " + prophet.numofchildren}`;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute("src", company.image);
    portrait.setAttribute("alt", `Portrait of ${company.companyname}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "250");
    portrait.setAttribute("height", "auto");

    // Append the section(card) with the created elements
    card.appendChild(h3);
    card.appendChild(portrait);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(a);
    // card.appendChild(p5);

    cards.appendChild(card);
  }); // end of forEach loop
}; // end of function expression

getCompanyData();
