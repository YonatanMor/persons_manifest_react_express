const PATH = "http://localhost:3400/persons";
const getAllPersonsBtn = document.querySelector("#getAllPersons");
const getPersonByIdBtn = document.querySelector("#getPersonById");
const displayPort = document.querySelector("#displayPort");
const getPersonId = document.querySelector("#personId");
const createPersonBtn = document.querySelector("#createPersonBtn");
const createPersonData = document.querySelector("#createPersonTextarea");
const updatePersonBtn = document.querySelector("#updatePersonBtn");
const updatePersonData = document.querySelector("#updatePersonTextarea");
const deletePersonBtn = document.querySelector("#deletePersonBtn");
const deletePersonId = document.querySelector("#personIdToDelete");

getAllPersonsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  displayPort.innerHTML = "";
  fetch(PATH)
    .then((res) => res.json())
    .then((persons) =>
      persons.forEach((pers) => {
        const objElement = document.createElement("div");
        const strPers = JSON.stringify(pers);
        objElement.innerText = strPers;
        displayPort.appendChild(objElement);
      })
    );
});

getPersonByIdBtn.addEventListener("click", (e) => {
  e.preventDefault();
  displayPort.innerHTML = "";
  const id = getPersonId.value;
  console.log(id);
  fetch(PATH + "/" + id)
    .then((res) => res.json())
    .then((res) => JSON.stringify(res))
    .then((pers) => {
      const element = document.createElement("div");
      element.innerHTML = pers;
      displayPort.appendChild(element);
    });
});

createPersonBtn.addEventListener("click", (e) => {
  e.preventDefault();
  displayPort.innerHTML = "";
  const persJson = createPersonData.value;
  fetch(PATH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: `${persJson}`,
  }).then((res) =>
    res.json().then((persArr) => {
      persArr.forEach((pers) => {
        const elemet = document.createElement("div");
        const jsonPers = JSON.stringify(pers);
        elemet.innerHTML = jsonPers;
        displayPort.appendChild(elemet);
      });
    })
  );
});

updatePersonBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const data = { id: getPersonId.value, persObj: updatePersonData.value };
  displayPort.innerHTML = "";
  fetch(PATH, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((persArr) =>
      persArr.forEach((pers) => {
        const jsonPers = JSON.stringify(pers);
        const element = document.createElement("div");
        element.innerHTML = jsonPers;
        displayPort.appendChild(element);
      })
    );
});

deletePersonBtn.addEventListener("click", (e) => {
  e.preventDefault();
  displayPort.innerHTML = "";
  fetch(`${PATH}/${deletePersonId.value}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((persArr) =>
      persArr.forEach((pers) => {
        const jsonPers = JSON.stringify(pers);
        const element = document.createElement("div");
        element.innerHTML = jsonPers;
        displayPort.appendChild(element);
      })
    );
});
