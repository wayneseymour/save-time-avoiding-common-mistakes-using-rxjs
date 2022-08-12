const click$ = Rx.Observable.fromEvent(document, 'click')

const four$ = Rx.Observable.interval(4000).take(1);

// Marble Diagram
/*
click$      --c-------c-c--c-c----c---c-c-c-c----
sixClicks$  --c-------ccc---c-c|  
*/

const sixClicks$ = click$.take(6)

sixClicks$.subscribe(function (ev) {
  console.log(ev.clientX) || displayInPreview(ev.clientX);
});

function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}