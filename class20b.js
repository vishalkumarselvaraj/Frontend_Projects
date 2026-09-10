function loop_1() {
  let a = 1;
  for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      continue;
    }
    console.log(i);
  }
}
loop_1();
