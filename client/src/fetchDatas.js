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
