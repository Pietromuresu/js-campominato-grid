

const grid = document.getElementById('grid');
const gridContainer = document.querySelector('.container-grid ')
const generate = document.querySelector('.buttons-container');



generate.addEventListener('click', function(){
  generate.classList.add('hide')
  gridContainer.classList.remove('hide')
})



for (let i = 0; i < 100; i++){
  const newDiv = document.createElement("div");
  grid.appendChild(newDiv);
  newDiv.classList.add('square');
}
