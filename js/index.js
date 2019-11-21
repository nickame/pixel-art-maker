//выборка ячеек палета
let allCell = document.getElementsByClassName('column');
let cell = Array.prototype.filter.call(allCell, function(allCelll){
  return allCelll.nodeName === 'DIV';
});
// цвет образца
let color='red';
let expColor = document.getElementById('colorExample');
expColor.style.backgroundColor= color;

//выборцвета
let chColor = document.getElementById('colors');
chColor.addEventListener("click", function(event) {
  console.log(color);
  color=window.getComputedStyle(event.target).backgroundColor;
  expColor.style.backgroundColor= color;
  console.log(color);
})
// обработчик событий для палета
for (var i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", function(event){
     event.currentTarget.style.backgroundColor= color;
   });
}
