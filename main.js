import { data } from "./data.js";

const pageContainer = document.querySelector(".people");
const calculateBtnContainer = document.querySelector(".btn-calculate");

/**
 * Create and append a DOM node for a developer
 * @param {*} person The dev for which to create a DOM node for
 */
const createElement = person => {
  let personElement = document.createElement("div");
  personElement.className = "person-element row align-items-center border no-border-sm rounded p-3 mb-3";

  let nameElement = document.createElement("div");
  nameElement.className = "person__name col-4 col-md-8 h3";
  nameElement.innerHTML = person.name;

  let teamElement = document.createElement("div");
  teamElement.className = "person__team text-center col-5 col-md-2";

  let teamSelect = document.createElement("select");
  teamSelect.className = "custom-select";
  teamSelect.name = "team";
  let option1 = document.createElement("option");
  option1.value = "Core";
  option1.text = "Core";
  option1.selected = person.team === "Core";
  let option2 = document.createElement("option");
  teamSelect.add(option1);  
  option2.value = "Sparkles";
  option2.text = "Sparkles";
  option2.selected = person.team === "Sparkles";  
  teamSelect.add(option2);

  let dayElement = document.createElement("div");
  dayElement.className = "person__days text-center col-3 col-md-2";
  let dayInput = document.createElement("input");
  dayInput.className = "form-control js-person-days";
  dayInput.type = "number";
  dayInput.placeholder = "0";
  dayInput.step = ".5";
  dayInput.min = "0";
  dayInput.max = "10";
  dayInput.value = person.days;

  personElement.appendChild(nameElement);
  personElement.appendChild(teamElement);
  teamElement.appendChild(teamSelect);
  personElement.appendChild(dayElement);
  dayElement.appendChild(dayInput);

  pageContainer.appendChild(personElement);
}

/**
 * Only use the fetched data to populate the page on first load
 */
data.people.forEach(person => {
  createElement(person);
})

/**
 * Capture event from both calculate buttons and display number of points
 */
calculateBtnContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  const teamName = event.target.value;
  const daysInSprint = (teamName === "Sparkles") ? 10 : 5;

  const allDevs = [...document.querySelectorAll(".person-element")];
  const sprintDevs = allDevs.filter(person => getTeamFromPerson(person) === teamName);
  const numberOfDevs = sprintDevs.length;
  const potentialPoints = numberOfDevs * daysInSprint;
  const meetingDays = document.querySelector(".js-meetings").value || 0;

  const devAwayDays = sprintDevs.reduce((accumulator, element) => {
    accumulator += Number(element.querySelector(".js-person-days").value);
    return accumulator;
  }, 0);

  const actualPoints = potentialPoints - meetingDays - devAwayDays;

  alert(`${daysInSprint} days in sprint\n
    ${numberOfDevs} Devs this sprint\n
    ${potentialPoints} potential points in sprint\n
    ${meetingDays} meeting days\n
    ${devAwayDays} dev away days\n
    *** ${actualPoints} actual points this sprint ***`)
})

/**
 * Helper that gets the team name from a person element
 * @param {Element} person A person DOM element
 * @returns {string} This person's team this sprint
 */
const getTeamFromPerson = (person) => {
  return person.querySelector(".custom-select").selectedOptions[0].value;
}
