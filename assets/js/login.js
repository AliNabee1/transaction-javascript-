function signIn() {

    var email = document.getElementById("userMail").value
    var password = document.getElementById("passWord").value
    var flag = false;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    for (let element of user_records) {
        if (element['email'] == email && element['newPassword']) {
            window.location.href = "listing.html"
            flag = true;
            break;

        }
        else {
            flag = false;
        }


    }
    if (flag) {
        window.location.href = "listing.html"
    }
    else {
        alert("Incorrect Password");
    }
    // if (user_records.some((v) => { return v.email == userMail  &&  v.passWord == password})) {
    //     alert("success data");

    //     // localStorage.setItem('name', current_user.);

    //     // localStorage.setItem('email', current_user.email);

    //     window.location.href = "listing.html"
    // }

}