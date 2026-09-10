function condition_2() {
  let a = Number(prompt("Enter the number : "));
  switch (a % 2) {
    case 0:
      console.log("Even");
      break;
    case 1:
      console.log("Odd");
      break;
    default:
      console.log("Please enter the valid number");
      break;
  }
}
condition_2();
