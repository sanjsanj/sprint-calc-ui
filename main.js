import { data } from "./data.js";

const pageContainer = document.querySelector(".people");
const calculateBtn = document.querySelector(".btn-sparkles");

const createElement = person => {
  console.log(person);
  let personElement = document.createElement("div");
  personElement.className = "row align-items-center border rounded p-3 mb-3";

  let nameElement = document.createElement("div");
  nameElement.className = "person__name col h3";
  nameElement.innerHTML = person.name;

  let teamElement = document.createElement("div");
  teamElement.className = "person__team text-center col-4 col-md-2";

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
  dayElement.className = "person__days text-center col-4 col-md-2";
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

data.people.forEach(person => {
  createElement(person);
})

calculateBtn.addEventListener("click", () => {
  const daysInSprint = 10;
  const numberOfDevs = data.people.filter(person => person.team === "Sparkles").length;
  const potentialPoints = numberOfDevs * daysInSprint;
  const meetingDays = document.querySelector(".js-meetings").value;
  const devAwayDays = document.querySelector(".js-person-days").value;
  alert(`${daysInSprint} days in sprint\n${numberOfDevs} Devs this sprint\n${potentialPoints} potential points in sprint\n${meetingDays} meeting days\n${devAwayDays} dev away days`)
})
