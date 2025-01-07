const highlightKeyword = (content, keyword) => {
  if (typeof content !== "string") return "Invalid";

  const regex = new RegExp(keyword, "gi");
  return content.replaceAll(regex, (match) => `<strong>${match}</strong>`);
};

const result = highlightKeyword(
  "Học lập trình tại F8 rất thú vị, bạn có biết điều gì THÚ VỊ hơn không?",
  "thú vỊ"
);

console.log(result);
document.write(result);
