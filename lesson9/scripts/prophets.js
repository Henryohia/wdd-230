const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //   console.table(data.prophets); // note that we reference the prophet array of the data object given the structure of the json file
  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
  const cards = document.querySelector("div.cards"); // select the output container element

  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let portrait = document.createElement("img");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let p5 = document.createElement("p");

    // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${
      prophet.name + " " + prophet.lastname + " : " + prophet.order
    }`;

    // Build the p1 and p2 content out to show the prophet's birth date and birth place
    p1.textContent = `${"Date of Birth:" + " " + prophet.birthdate}`;
    p2.textContent = `${"Place of Birth:" + " " + prophet.birthplace}`;

    // Build the p1 and p2 content out to show the prophet's birth date and birth place(stretch)
    p3.textContent = `${"Death:" + " " + prophet.death}`;
    p4.textContent = `${"Length:" + " " + prophet.length}`;
    p5.textContent = `${"Number of Children:" + " " + prophet.numofchildren}`;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${
        prophet.name + " " + prophet.lastname + "  " + prophet.order
      }`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    card.appendChild(portrait);

    cards.appendChild(card);
  }); // end of forEach loop
}; // end of function expression

getProphetData();
