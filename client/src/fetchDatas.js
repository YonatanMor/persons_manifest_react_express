const PATH = "http://localhost:3400/persons";

// get all
// getAllPersonsBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   displayPort.innerHTML = "";
//   fetch(PATH)
//     .then((res) => res.json())
//     .then((persons) =>
//       persons.forEach((pers) => {
//         const objElement = document.createElement("div");
//         const strPers = JSON.stringify(pers);
//         objElement.innerText = strPers;
//         displayPort.appendChild(objElement);
//       })
//     );
// });

export const fetchAll = () => {
  return fetch(PATH);
};

export const fetchById = (id) => {
  return fetch(`${PATH}/${id}`);
};

export const fetchCreated = ({ firstname, city, age, gender }) => {
  return fetch(PATH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: firstname, city, age, gender }),
  });
};

export const fetchUpdated = ({ id, firstname, city, age, gender }) => {
  return fetch(PATH, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, name: firstname, city, age, gender }),
  });
};

export const fetchDeleted = (id) => {
  return fetch(`${PATH}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
