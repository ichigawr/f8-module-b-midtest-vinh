const printChristmasTree = (n, character) => {
  if (
    !Number.isInteger(n) ||
    n <= 0 ||
    n >= 100 ||
    typeof character !== "string" ||
    character.length > 1
  )
    return "Invalid";

  let tree = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      tree += " ";
    }

    for (let j = 0; j < i * 2 - 1; j++) {
      tree += character;
    }

    tree += "\n";
  }

  return tree + tree.split("\n")[0];
};

console.log(printChristmasTree(5, "*"));
console.log(printChristmasTree(4, "o"));
console.log(printChristmasTree(-10, "x"));
console.log(printChristmasTree(4, "oa"));
console.log(printChristmasTree(10, "*"));
console.log(printChristmasTree(1, "*"));
