function addData() {

    let Id           = document.getElementById("id").value;
    let Tkn_id       = document.getElementById("T_id").value;
    let Name         = document.getElementById("name").value;
    let mail         = document.getElementById("gmail").value;
    let Amnt         = document.getElementById("amount").value;
    let Currency     = document.getElementById("currency").value;
    let Father       = document.getElementById("fName").value;
    let Nmbr         = document.getElementById("number").value;
    let Cnic         = document.getElementById("cnic").value;
    let tkn_No       = document.getElementById("tokenNo").value;
    let fort         = document.getElementById("forter").value;
    let nationality  = document.getElementById("Nationality").value;
    let Gender       = document.getElementById("gender").value;
    let T_amount     = document.getElementById("totalAmount").value;
    let agee         = document.getElementById("Age").value;
  
  
    let transactions_record = new Array();
    transactions_record = JSON.parse(localStorage.getItem("Transactions")) ? JSON.parse(localStorage.getItem("Transactions")) : []
    if (transactions_record == null) {
  
      Transactions = []
    }
    else {
      transactions_record.push({
        "id": Id, "transaction_id": Tkn_id, "name": Name, "Gmail": mail, "Amount": Amnt,
        "Currency": Currency, "Father_name": Father, "Mobile_no": Nmbr, "identity_No": Cnic, "Token_No": tkn_No,
        "Forter_id": fort, "NationaLity": nationality, "Gender": Gender, "Total_Amount": T_amount, "AGE": agee
      })
      localStorage.setItem("Transactions", JSON.stringify(transactions_record));
    }
    // let transaction_records;
    // if(JSON.parse(localStorage.getItem("transaction_records"))==null){
    //   transaction_records = []
    // }
  
    // else {
    //   console.log(transaction_records)
    //   transaction_records.push({
    //     "id": Id, "transaction_id": Tkn_id, "name": Name, "Gmail": mail, "Amount": Amnt,
    //     "Currency": Currency, "Father_name": Father, "Mobile_no": Nmbr, "identity_No": Cnic, "Token_No": tkn_No,
    //     "Forter_id": fort, "NationaLity": nationality, "Gender": Gender, "Total_Amount": T_amount, "AGE": agee
    //   })
    //   console.log(transaction_records)
    //   localStorage.setItem("transaction_records", JSON.stringify(transaction_records));
    // }
  
  }
  