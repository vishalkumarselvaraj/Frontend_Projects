function array_1() {
  let a = [75, 33, 86, 90, 88];
  let sum = 0;
  for (i = 0; i < a.length; i++) {
    sum = sum + a[i];
  }
  let avg = sum / a.length;
  console.log(avg);
}
array_1();
