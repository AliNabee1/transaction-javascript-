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

//usage:
readTextFile("account_details.json", function (text) {
    let data = JSON.parse(text);
    body = document.getElementsByTagName('tbody')[0];
    var tableString;
    // console.log(data);
    for (let element of data) {

        tableString += "<tr>";


        tableString += "<td>" + element["ID"] + "</td>";
        tableString += "<td>" + element["TransactionId"] + "</td>";
        tableString += "<td>" + element["Name"] + "</td>";
        tableString += "<td>" + element["eMail"] + "</td>";
        tableString += "<td>" + element["Amount"] + "</td>";
        tableString += '<td><a href="#" class="btn btn-sm btn-primary ">View</a></td>';
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
        tableString += '<td><a href="#" class="btn btn-sm btn-primary ">View</a></td>';
        tableString += '<td><a href="#" class="btn btn-sm btn-danger " onclick="deletee(' + index + ')">Delete</a></td>';
        tableString += "</tr>";

    }

    body.innerHTML = tableString;
});


function deletee(index) {
    console.log(index);
    let l = JSON.parse(localStorage.getItem("Transaction"))
    console.log(l);
    l = ""
    console.log(l);
    localStorage.setItem("Transaction", l)
}
