var tbody = document.getElementsByTagName("tbody")[0];
var isIimerOn = false;
var timer;

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

function shuffle() {
  TABLE_DATA.sort((a, b) => 0.5 - Math.random());
  fillTable();
  timer = setTimeout(() => shuffle(), 1000);
}

window.onload = function () {
  fillTable();
  document.getElementById("stop").disabled = true;
  document.getElementById("start").onclick = () => {
    if (isIimerOn == false) {
      isIimerOn == true;
      shuffle();
    }
    ("");
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("sort").disabled = true;
  };
};
