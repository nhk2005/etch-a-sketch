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
}

resizeGrid(16);