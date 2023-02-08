function toggleMenu() {
  //   console.log("it worked!");
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

// ****************************************************************
document.querySelector(
  "#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

// *************************************************************
new Date().getFullYear;
let date = new Date();
console.log(date.getFullYear());
const copyrightFooter = `
 <p>
  Copyright © ${new Date().getFullYear()} Access Chamber
 </p>
`;
document.getElementById("copyright").innerHTML = copyrightFooter;
