const inputM1 = document.querySelector(".inputModal1");
const inputM2 = document.querySelector(".inputModal2");
const inputM3 = document.querySelector(".inputModal3");
const saveModal = document.querySelector(".saveModal");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    let tableData = "";
    objectData.map((values, e) => {
      tableData += `
    <tr class="trTableData">
    <td><input type="checkbox"></td>
    <td class="imgTd"><div class="imgTable"></div><p> ${values.name}</p></td>
    <td>#${values.id}</td>
    <td>${values.username}</td>
    <td>Data</td>
    <td>${values.address.city}</td>
    <td><a href= "1-770-736-8031 x56442"><i class="bi bi-telephone"></i></a><a href= "Shanna@melissa.tv"><i class="bi bi-envelope leftIcon"></i></a></td>
    <td><button class="viiBtn">VII</button></td>
    <td><btn class="QwerR"><i  class="bi bi-trash"></i></btn></td>
    </tr>
    `;
    });
    const tableBody = document.getElementById("table_body");
    tableBody.innerHTML = tableData;
    let saveModalTable = "";
    saveModal.addEventListener("click", function () {
      if (!(inputM1.value || inputM2.value || inputM3.value === " ")) {
        alert("Iltimos Malumotn tuldiring!");
        console.error(error);
      }
      let lentgObb = 0;
      lentgObb += objectData.length;
      saveModalTable = `
        <tr class="trTableData">
        <td><input type="checkbox" class = "checkbox"></td>
        <td class="imgTd"><div class="imgTable"></div><p>${
          inputM1.value
        }</p></td>
        <td>#${(lentgObb = lentgObb + 1)}</td>
        <td>${inputM2.value}</td>
        <td>Data</td>
        <td>${inputM3.value}</td>
        <td><i class="bi bi-telephone"></i><i class="bi bi-envelope leftIcon"></i></td>
        <td><button class="viiBtn">VII</button></td>
        <td><btn class="QwerR"><i  class="bi bi-trash"></i></btn></td>
        </tr>
      `;
      tableData += saveModalTable;
      tableBody.innerHTML = tableData;
      inputM1.value = "";
      inputM2.value = "";
      inputM3.value = "";
    });

    const a = document.querySelectorAll(".QwerR");
    const delt = document.querySelectorAll(".trTableData");

    for (let i = 0; i < a.length; i++) {
      a[i].addEventListener("click", function () {
        delt[i].remove();
      });
    }
  });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => console.log(objectData));
