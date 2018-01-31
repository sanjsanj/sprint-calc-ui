import { data } from "./data.js";

const pageContainer = document.querySelector(".people");

const createElement = person => {
  console.log(person);
  let personElement = document.createElement("div");
  personElement.className = "person p-3 row mb-3";

  let nameElement = document.createElement("div");
  nameElement.className = "person__name col";
  nameElement.innerHTML = person.name;

  let teamElement = document.createElement("div");
  teamElement.className = "person__team text-center col-4 col-md-2";
  teamElement.innerHTML = person.team;

  let dayElement = document.createElement("div");
  dayElement.className = "person__days text-center col-4 col-md-2";
  dayElement.innerHTML = person.days;

  personElement.appendChild(nameElement);
  personElement.appendChild(teamElement);
  personElement.appendChild(dayElement);

  pageContainer.appendChild(personElement);
}

data.people.forEach(person => {
  createElement(person);
})
