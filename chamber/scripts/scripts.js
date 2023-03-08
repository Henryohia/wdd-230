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

// ********************************************************************
// function addEvent() {
//   var now = new Date();
//   const day = now.getDate()
//   if (day == 1 || day == 2) {
//     document.getElementById("banner")[0];
//     banner.innerHTML

//   }

// }

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
weekday[7] = "Sunday";

var day = weekday[now.getDay()];

// document.writeln("<p>Today is " + day + "</p>");
if (day == "Monday" || day == "Tuesday") {
  const header = document.querySelector("header");
  const para = document.createElement("p");
  para.textContent =
    "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
  header.appendChild(para);
  para.style.backgroundColor = "tomato";
  para.style.color = "black";
  para.style.position = "absolute";
  para.style.top = "0";
  para.style.width = "100%";
  para.style.padding = "0";
  para.style.margin = "0";
  para.style.textAlign = "center";
  para.style.fontWeight = "bold";
}

// More info btn

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "more info";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "less info";
    moreText.style.display = "inline";
  }
}
