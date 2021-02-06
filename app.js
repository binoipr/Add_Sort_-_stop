var tbody = document.getElementsByTagName("tbody")[0];

//Function to populate table
function fillTable() {
  var rows = [];
  for (var n = 0; n < TABLE_DATA.length; n++) {
    rows.push(
      "<tr><td>" +
        TABLE_DATA[n].id +
        "</td>" +
        "<td>" +
        TABLE_DATA[n].name +
        "</td>" +
        "<td>" +
        TABLE_DATA[n].price +
        "</td></tr>"
    );
  }
  tbody.innerHTML = rows.join("");
}

window.onload = function () {
  fillTable();
};
