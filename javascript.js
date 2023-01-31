// This function resizes current grid to a new n x n grid
function resizeGrid(n) {
  const sketch = document.querySelector(".sketch");
  
  sketch.innerHTML = "";

  for (let i = 0; i < n; ++i) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < n; ++j) {
      const item = document.createElement("div");
      item.classList.add("item");

      row.appendChild(item);
    };

    sketch.appendChild(row)
  }

  document.querySelector(".resize-button").addEventListener("click", () => {
    const newSize = Number(prompt("Please enter new size for sketch:"));
    resizeGrid(newSize);
  });
  
  document.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("mouseover", () => item.classList.add("painted"));
  });
}


resizeGrid(16);