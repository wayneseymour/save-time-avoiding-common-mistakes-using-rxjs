const click$ = Rx.Observable.fromEvent(document, 'click')

const four$ = Rx.Observable.interval(4000).take(1);

// Marble Diagram
/*
click$         --c-------c-c--c-c----c---c-c-c-c----
four$          ---------------0|
clickUntil4$   --c-------c-c--|
*/

const clickUntil4$ = click$.takeUntil(four$);

clickUntil4$.subscribe(function (ev) {
  console.log(ev.clientX) || displayInPreview(ev.clientX);
});

function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}