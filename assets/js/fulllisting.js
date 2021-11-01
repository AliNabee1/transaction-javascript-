
function advanceFilter() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue, choice;
  choice = document.getElementById('choice').value;
  input = document.getElementById("myInput2");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  console.log(choice);
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[choice];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function filter() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  console.log("YES");
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");

  tr = table.getElementsByTagName("tr");
  console.log(tr.length);
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function showSearch() {
  var x = document.getElementById("search");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function showSearch2() {
  var x = document.getElementById("search2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function searchOption() {
  var x = document.getElementById("options");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
}


readTextFile("account_details.json", function (text) {
  let data = JSON.parse(text);
  body = document.getElementsByTagName('tbody')[0];
  var tableString;
  console.log(data);
  for (let element of data) {

    tableString += "<tr id='tableBody'>";


    tableString += "<td>" + element["ID"] + "</td>";
    tableString += "<td>" + element["TransactionId"] + "</td>";
    tableString += "<td>" + element["Name"] + "</td>";
    tableString += "<td>" + element["eMail"] + "</td>";
    tableString += "<td>" + element["Amount"] + "</td>";
    tableString += "<td>" + element["currEncy"] + "</td>";
    tableString += "<td>" + element["fatherName"] + "</td>";
    tableString += "<td>" + element["number"] + "</td>";
    tableString += "<td>" + element["cnic"] + "</td>";
    tableString += "<td>" + element["tokenNo"] + "</td>";
    tableString += "<td>" + element["forterToken"] + "</td>";
    tableString += "<td>" + element["nationality"] + "</td>";
    tableString += "<td>" + element["gender"] + "</td>";
    tableString += "<td>" + element["Totalamount"] + "</td>";
    tableString += "<td>" + element["age"] + "</td>";
    // tableString +='<td><a href="#" class="btn btn-sm btn-primary ">View</a></td>';
    tableString += "</tr>";

  }

  body.innerHTML = tableString;
  let trans = new Array();
  trans = JSON.parse(localStorage.getItem("Transactions")) ? JSON.parse(localStorage.getItem("Transactions")) : []
  for (let element of trans) {
    // console.log(trans);
    tableString += "<tr>";

    var index = trans.indexOf(element);
    tableString += "<td>" + element["id"] + "</td>";
    tableString += "<td>" + element["transaction_id"] + "</td>";
    tableString += "<td>" + element["name"] + "</td>";
    tableString += "<td>" + element["Gmail"] + "</td>";
    tableString += "<td>" + element["Amount"] + "</td>";
    tableString += "<td>" + element["currency"] + "</td>";
    tableString += "<td>" + element["fathername"] + "</td>";
    tableString += "<td>" + element["number"] + "</td>";
    tableString += "<td>" + element["cnic"] + "</td>";
    tableString += "<td>" + element["tokenNo"] + "</td>";
    tableString += "<td>" + element["fToken"] + "</td>";
    tableString += "<td>" + element["nationality"] + "</td>";
    tableString += "<td>" + element["gender"] + "</td>";
    tableString += "<td>" + element["TotalAmount"] + "</td>";
    tableString += "<td>" + element["age"] + "</td>";
    tableString += '<td><a href="#" class="btn btn-sm btn-primary ">View</a></td>';
    tableString += '<td><a href="#" class="btn btn-sm btn-danger " onclick="deletee(' + index + ')">Delete</a></td>';
    tableString += "</tr>";

  }

  body.innerHTML = tableString;
});
