const boardsStr = localStorage.getItem("boards");
const boardsObj = JSON.parse(boardsStr);

const idx = location.search;
const index = idx.split("=")[1];

console.log(idx);
console.log(idx.split("="));
console.log(index);