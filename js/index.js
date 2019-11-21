// заполненин холста
let container = document.getElementById('container');
for (let i = 0; i < 20; i++) {
  let row = document.createElement('div');
    row.classList+='row';
    container.appendChild(row);
  for (let j = 0; j < 30; j++) {
    let column = document.createElement('div');
      column.classList+='column';
      row.appendChild(column);
  }
}
// создание палитры
let colors = ['white','black','silver','gray','maroon', 'red', 'purple',
             'fuchsia','green', 'lime', 'olive', 'yelloy', 'navy',
             'blue', 'teal', 'aqua'];
let colorItems = document.getElementById('colors');
 for (var i = 0; i < colors.length; i++) {
   let colorItem = document.createElement('li');
   colorItem.classList+='colorItem';
   colorItem.style.backgroundColor= colors[i];
   colorItems.appendChild(colorItem);
 }

//выборка ячеек холста
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
  color=window.getComputedStyle(event.target).backgroundColor;
  expColor.style.backgroundColor= color;
})
// обработчик событий для холста
for (var i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", function(event){
     event.currentTarget.style.backgroundColor= color;
   });
}
for (var i = 0; i < cell.length; i++) {
  cell[i].addEventListener("mousemove", function(event){
    if(event.buttons==1)
     event.currentTarget.style.backgroundColor= color;
   });
}
