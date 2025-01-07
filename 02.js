const listCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateId(length, prefix = "") {
  if (
    !Number.isInteger(length) ||
    length <= 0 ||
    length >= 100 ||
    typeof prefix !== "string" ||
    prefix.length >= 10
  )
    return "Invalid";

  return (
    prefix +
    [...Array(length)]
      .map(
        (char) =>
          listCharacters[Math.floor(Math.random() * listCharacters.length)]
      )
      .join("")
  );
}

console.log(generateId(8, "user"));
console.log(generateId(4, "product - "));
console.log(generateId(6, "category-"));
console.log(generateId(10));
