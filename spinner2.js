const spinningChar = "|/-\\|-\\|";
let delay = 3000; // starts at 3sec

for (let char of spinningChar) { // loop over the characters of the string
  setTimeout(() => {
    process.stdout.write('\r' + char + ' ');
  }, delay);
  delay += 1000; // each rotation is 1sec after the previous one
}