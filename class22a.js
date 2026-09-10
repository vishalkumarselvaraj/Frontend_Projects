function user_1() {
  let a = document.getElementById("name1").value;
  console.log(a);
  let b = document.getElementById("pass1").value;
  console.log(b);
  let c = document.getElementById("age1").value;
  console.log(c);
  if (a == "vishal" && b == "123" && c == "20") {
    document.getElementById("success_message").innerHTML =
      "Submitted Successfully";
  } else {
    if (a == "") {
      document.getElementById("error_message").innerHTML =
        "Please enter the name";
    } else if (b == "") {
      document.getElementById("error_password").innerHTML =
        "Please enter the password";
    } else if (c == "") {
      document.getElementById("error_age").innerHTML = "Please enter the age";
    }
  }
}
