import { data } from "./data.js";

const pageContainer = document.querySelector(".main");

const createElement = person => {
  console.log(person);
  let personElement = document.createElement("div");
  personElement.className = "person";

  let nameElement = document.createElement("div");
  nameElement.className = "name";
  nameElement.innerHTML = person.name;

  let teamElement = document.createElement("div");
  teamElement.className = "team";
  teamElement.innerHTML = person.team;

  let dayElement = document.createElement("div");
  dayElement.className = "day";
  dayElement.innerHTML = person.days;

  personElement.appendChild(nameElement);
  personElement.appendChild(teamElement);
  personElement.appendChild(dayElement);

  pageContainer.appendChild(personElement);
}

data.people.forEach(person => {
  createElement(person);
})
