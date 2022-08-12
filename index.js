// const userData$ = Rx.Observable.ajax({
//   url: "https://api.quotable.io/random",
//   method: "GET",
// });
const click$ = Rx.Observable
  .fromEvent(document, "click");

const tickWhenClick$ = click$
  .flatMap((ev) => Rx.Observable.interval(500))

tickWhenClick$.subscribe((data) => {
  console.log(data)
})

function displayInPreview(string) {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(string);
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv);
}
