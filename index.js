const [arg] = process.argv.slice(2);

if (!arg) {
  console.error("Please provide a number");
  process.exit(1);
}

const target = parseInt(arg, 10);

if (isNaN(target)) {
  console.error("Please provide a valid number");
  process.exit(1);
}

for (let i = 1; i <= target; i++) {
  let result = "";
  if (i % 3 === 0) result += "Fizz";
  if (i % 5 === 0) result += "Buzz";
  console.log(result || i);
}
