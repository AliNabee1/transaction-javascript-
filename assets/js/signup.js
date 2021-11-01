
function signUp() {

    let first = document.getElementById("firstName").value;
    let last = document.getElementById("lastName").value;
    let mail = document.getElementById("email").value;
    let pass = document.getElementById("Password").value;
    let c_pass = document.getElementById("Confirm_Password").value;

    if (!(pass == c_pass)) {

        alert("Passwords are not matched.");

    } else {


        let user_records = new Array();
        user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
        if (user_records.some((v) => { return v.email == email })) {
            alert("duplicate data");
        }
        else {
            user_records.push({ "firstName": first, "lastName": last, "email": mail, "newPassword": pass, "confirmPass": c_pass })
            localStorage.setItem("users", JSON.stringify(user_records));
        }

    }

}

            // arrayy={
            //     firstName:first,
            //     Lastname: last,
            //     // gmail: gmail,
            //     Password: pass,
            //     Confirm_Password: c_pass,
            // }
            // // if (!(pass == c_pass)){
            // //     alert("password  not matched")
            // // }
            // var users= localStorage.getItem("users")
            // if(users == null)
            // {
            //     users=[]

            // }
            // else{
            //     users=JSON.parse("users")
            // }
            // users.push(arrayy)
            // users=JSON.stringify(users)
            // localStorage.setItem("users" , users)
