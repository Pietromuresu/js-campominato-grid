

const grid = document.getElementById('grid');


for (let i = 0; i < 100; i++){
  const newDiv = document.createElement("div");
  grid.appendChild(newDiv);
  newDiv.classList.add('square')
}