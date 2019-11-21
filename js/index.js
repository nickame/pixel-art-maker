let allCell = document.getElementsByClassName('column');
let cell = Array.prototype.filter.call(allCell, function(allCelll){
  return allCelll.nodeName === 'DIV';
});
let color='red';
for (var i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", function(event){
     event.currentTarget.style.backgroundColor= color;
   });
}

  // cel.addEventListener("click", function(event){
  //   event.currentTarget.style.backgroundColor='red';
  // });

// function chengeBackground(event) {
// event.currentTarget.style.backgroundColor='red';
// }
